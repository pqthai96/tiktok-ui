import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import React, {ReactNode} from "react";
import {Link} from "react-router-dom";

interface ButtonProps {
  to?: string;
  href?: string;
  primary?: boolean;
  outline?: boolean;
  small?: boolean;
  large?: boolean;
  text?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  separate?: boolean;
  className?: any;
  children: ReactNode;
  onClick?: () => void;
}

const cx = classNames.bind(styles);

const Button: React.FC<ButtonProps> = ({
                                         to,
                                         href,
                                         primary = false,
                                         outline = false,
                                         small = false,
                                         large = false,
                                         text = false,
                                         rounded = false,
                                         disabled = false,
                                         leftIcon,
                                         rightIcon,
                                         separate = false,
                                         children,
                                         className,
                                         onClick,
                                         ...passProps
                                       }) => {

  let Comp: keyof JSX.IntrinsicElements | React.ComponentType<any> = 'button';
  const props = {
    to,
    href,
    primary,
    outline,
    small,
    large,
    text,
    rounded,
    disabled,
    leftIcon,
    rightIcon,
    separate,
    onClick,
    ...passProps
  };

  // Remove event listener when button disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key as keyof typeof props] === 'function') {
        delete props[key as keyof typeof props];
      }
    })
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    separate
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}

export default Button;