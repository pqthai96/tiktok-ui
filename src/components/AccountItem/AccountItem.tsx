import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import Image from "../Image/Image";
import {FC} from "react";
import {Link} from "react-router-dom";

interface AccountItemProps {
  data: Record<string, any>
}

const cx = classNames.bind(styles);

const checkIcon = faCheckCircle as IconProp;
const AccountItem: FC<AccountItemProps> = ({data}) => {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.avatar}/>
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon icon={checkIcon} className={cx('check')}/>}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;