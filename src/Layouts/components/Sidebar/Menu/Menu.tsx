import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import {FC, ReactNode} from "react";

interface MenuProps {
  children: ReactNode
}

const cx = classNames.bind(styles);

const Menu: FC<MenuProps> = ({children}) => {
  return (
    <nav>
      {children}
    </nav>
  );
}

export default Menu;