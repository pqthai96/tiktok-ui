import {FunctionComponent, ReactNode} from "react";
import Header from "../components/Header/Header";
import classNames from "classnames/bind";
import styles from "./HeaderOnly.module.scss";

const cx = classNames.bind(styles);

const HeaderOnly: FunctionComponent<{ children: ReactNode }> = ({children}) => {
  return (
    <div>
      <Header/>
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  )
}

export default HeaderOnly;