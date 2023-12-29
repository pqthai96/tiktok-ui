import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import {FC, Fragment, ReactNode} from "react";
import {NavLink} from "react-router-dom";

interface MenuItemProps {
  title: string;
  to: any;
  icon: ReactNode,
  activeIcon: ReactNode
}

const cx = classNames.bind(styles);

const MenuItem: FC<MenuItemProps> = ({title, to, icon, activeIcon}) => {
  return (
    <NavLink to={to} className={(nav) => cx('menu-item', {active: nav.isActive})} end>
      {({isActive}) => {
        return (
          <Fragment>
            {isActive ? activeIcon : icon}
            <span className={cx('title')}>{title}</span>
          </Fragment>
        )
      }}
    </NavLink>
  );
}

export default MenuItem;