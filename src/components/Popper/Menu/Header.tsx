import styles from "./Menu.module.scss";

import {FC} from "react";
import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

interface MenuHeaderProps {
  title: string,
  onBack: () => void
}

const cx = classNames.bind(styles);

const chevronLeftIcon = faChevronLeft as IconProp

const Header: FC<MenuHeaderProps> = ({title, onBack}) => {

  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <FontAwesomeIcon icon={chevronLeftIcon}/>
      </button>
      <h4 className={cx('header-title')}>
        {title}
      </h4>
    </header>
  )
}

export default Header;