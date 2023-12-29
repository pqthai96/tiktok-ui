import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import {FC, useEffect, useState} from "react";
import AccountItem from "./AccountItem";
import * as SuggestedServices from "../../services/suggestedService";

interface SuggestedAccountsProps {
  label: string;
}

const cx = classNames.bind(styles);

const SuggestedAccounts: FC<SuggestedAccountsProps> = ({label}) => {

  const [display, setDisplay] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchApi = async () => {

      const result = await SuggestedServices.search(display ? "more" : "less");
      setResults(result);
    }

    fetchApi();
  }, [display])


  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <div className={cx('account-items')}>
        {results.map((result) => {
          return <AccountItem key={result.id} data={result}/>
        })}
      </div>
      <p className={cx('more-btn')} onClick={() => setDisplay(!display)}>{display ? 'See less' : 'See more'}</p>
    </div>
  )
}

export default SuggestedAccounts;