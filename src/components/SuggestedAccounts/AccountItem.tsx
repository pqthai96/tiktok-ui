import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import Image from "../Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FC} from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import PopperWrapper from "../Popper/PopperWrapper";
import AccountPreview from "./AccountPreview/AccountPreview";

interface AccountItemProps {
  data: Record<string, any>
}

const cx = classNames.bind(styles);

const checkIcon = faCheckCircle as IconProp;

const AccountItem: FC<AccountItemProps> = ({data}) => {

  const renderPreview = (props: any) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview data={data}/>
        </PopperWrapper>
      </div>
    )
  }

  return (
    <HeadlessTippy
      interactive
      delay={[800, 0]}
      appendTo={() => document.body}
      render={renderPreview}
      placement="bottom"
      offset={[-5, 5]}
    >
      <div className={cx('account-item')}>
        <Image src={data.avatar} alt={data.alt} className={cx('avatar')}/>
        <div className={cx('info')}>
          <h4 className={cx('name')}>
            <span>{data.full_name}</span>
            {data.tick && <FontAwesomeIcon icon={checkIcon} className={cx('check')}/>}
          </h4>
          <span className={cx('username')}>{data.nickname}</span>
        </div>
      </div>
    </HeadlessTippy>
  )
}

export default AccountItem;