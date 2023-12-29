import {FC, ReactNode} from "react";
import classNames from "classnames/bind";
import styles from "./Popper.module.scss";

interface PopperWrapperProps {
  className?: any;
  children: ReactNode;
}

const cx = classNames.bind(styles);

const PopperWrapper: FC<PopperWrapperProps> = ({children, className}) => {

  const classes = cx('wrapper', {
    [className]: className
  })

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default PopperWrapper;