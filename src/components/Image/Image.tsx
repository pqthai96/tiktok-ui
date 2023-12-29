import React, {ForwardedRef, forwardRef, ForwardRefRenderFunction, useState} from "react";
import classNames from "classnames/bind";

import styles from './Image.module.scss';
import Images from "../../assets/images";

interface ImageProps {
  src: string;
  alt: string;
  className?: any;
}

const cx = classNames.bind(styles);

const Image: ForwardRefRenderFunction<HTMLImageElement, ImageProps> = ({src, alt, className}, ref) => {

  // Handle failed Image
  const [fallback, setFallback] = useState('');

  const classes = cx({
    [className]: className
  })

  const handleError = () => {
    setFallback(Images.noImage);
  }

  return (
    <img ref={ref} src={fallback ? fallback : src} alt={alt} className={classes} onError={handleError}/>
  );
}

export default forwardRef(Image);