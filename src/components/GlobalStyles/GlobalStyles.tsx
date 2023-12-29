import styles from './GlobalStyles.module.scss';
import {FunctionComponent, ReactNode} from "react";

const GlobalStyles: FunctionComponent<{ children: ReactNode }> = ({children}) => {
  return <div className={styles.GlobalStyles}>{children}</div>;
}

export default GlobalStyles;