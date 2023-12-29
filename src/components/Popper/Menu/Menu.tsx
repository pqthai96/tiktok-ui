import {PopperWrapper} from "../index";
import styles from "./Menu.module.scss";

import {FC, ReactElement, useState} from "react";
import classNames from "classnames/bind";
import Button from "../../Button/Button";
import Header from "./Header";
import HeadlessTippy from "@tippyjs/react/headless";

interface MenuProps {
  children: ReactElement,
  items: any[],
  onChange?: (item: object) => void
}

const cx = classNames.bind(styles);

const Menu: FC<MenuProps> = ({children, items, onChange}) => {

  const [history, setHistory] = useState([{data: items}]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {

      let isParent: boolean;
      if (item.children) {
        isParent = true;
      }

      return (
        <Button
          leftIcon={item.icon}
          to={item.to}
          separate={item.separate}
          className={cx('more-choice-item')}
          key={index}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => {
                return [...prev, item.children];
              });
            } else {
              if (onChange) {
                onChange(item);
              }
            }
          }}
        >
          {item.title}
        </Button>
      )
    })
  }

  // Back Menu
  const handleOnBackMenu = () => {
    setHistory(prev => prev.slice(0, prev.length - 1));
  }

  const renderResult = (attrs: any) => (
    <div className={cx('more-choice-menu')} tabIndex={-1}>
      <PopperWrapper className={cx('more-choice-items')}>
        {history.length > 1 && <Header title="Language" onBack={handleOnBackMenu}/>}
        <div className={cx('menu-body')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  // Reset to first page menu when mouse outside
  const handleResetMenu = () => setHistory(prev => prev.slice(0, 1));

  return (
    <HeadlessTippy
      interactive
      placement="bottom-end"
      offset={[12, 8]}
      delay={[0, 500]}
      hideOnClick={false}
      render={renderResult}
      onHide={handleResetMenu}
    >
      {children}
    </HeadlessTippy>
  )
}

export default Menu;