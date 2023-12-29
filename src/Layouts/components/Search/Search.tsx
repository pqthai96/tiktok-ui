import {PopperWrapper} from "../../../components/Popper";
import AccountItem from "../../../components/AccountItem/AccountItem";
import styles from "./Search.module.scss";
import {useDebounce} from "../../../hooks";
import * as SearchServices from "../../../services/searchService";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import {faCircleXmark, faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {useEffect, useRef, useState} from "react";

const cx = classNames.bind(styles);
const closeIcon = faCircleXmark as IconProp;
const spinnerIcon = faSpinner as IconProp;
const searchIcon = faMagnifyingGlass as IconProp;

const Search = () => {

  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    const fetchApi = async () => {
      const result = await SearchServices.search(debounced);
      setSearchResult(result);
      setLoading(false);
    }

    fetchApi();

    // httpRequest.get("users/search", {
    //   params: {
    //     q: debounced,
    //     type: 'less'
    //   }
    // }).then((res) => {
    //   setSearchResult(res.data);
    //   setLoading(false);
    // })
  }, [debounced]);

  const handleChange = (e: any) => {
    const searchValue = e.target.value;

    if(!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  }
  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current?.focus();
  }

  const handleHideResult = () => {
    setShowResult(false);
  }

  return (
    <HeadlessTippy
      interactive={true}
      appendTo={() => document.body}
      visible={showResult && searchResult.length > 0}
      render={attrs => (
        <div className={cx('search-result')} tabIndex={-1}>
          <PopperWrapper>
            <>
              <h4 className={cx('search-title')}>
                Accounts
              </h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result}/>
              ))}
            </>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input ref={inputRef} type="text" placeholder="Search accounts and videos" spellCheck={false}
               value={searchValue}
               onChange={handleChange}
               onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={() => handleClear()}>
            <FontAwesomeIcon icon={closeIcon}/>
          </button>
        )}

        {loading && <FontAwesomeIcon className={cx('loading')} icon={spinnerIcon}/>}
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={searchIcon}/>
        </button>
      </div>
    </HeadlessTippy>
  )
}

export default Search;