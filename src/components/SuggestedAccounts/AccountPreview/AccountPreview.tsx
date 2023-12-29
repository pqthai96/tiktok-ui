import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss';
import {FC} from "react";
import Image from "../../Image";
import Button from "../../Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface AccountPreviewProps {
  data: Record<string, any>
}

const cx = classNames.bind(styles)

const checkIcon = faCheckCircle as IconProp;

const AccountPreview: FC<AccountPreviewProps> = ({data}) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image src={data.avatar} alt={data.alt} className={cx('avatar')}/>
        <Button primary>Follow</Button>
      </div>
      <div className={cx('body')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon icon={checkIcon} className={cx('check')}/>}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
      <div className={cx('footer')}>
        <p><strong>{data.followers_count}M</strong> Followers</p>
        <p><strong>{data.likes_count}M</strong> Likes</p>
      </div>
    </div>
  )
}

export default AccountPreview;