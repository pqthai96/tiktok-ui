import {FunctionComponent} from "react";
import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faEarthAmerica,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faPlus,
  faSignIn,
  faSignOut,
  faVideo
} from "@fortawesome/free-solid-svg-icons";
import {faBookmark, faLightbulb, faMessage, faPaperPlane, faUser} from "@fortawesome/free-regular-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'
import {Link} from "react-router-dom";
import {bottom} from "@popperjs/core";
import {faTiktok} from "@fortawesome/free-brands-svg-icons";

import styles from "./Header.module.scss";
import images from "../../../assets/images";
import {MenuWrapper} from "../../../components/Popper";
import Button from "../../../components/Button/Button";
import Image from "../../../components/Image/Image";
import Search from "../Search/Search";
import config from "../../../config";

const cx = classNames.bind(styles);

const signInIcon = faSignIn as IconProp;
const ellipsisVerticalIcon = faEllipsisVertical as IconProp;
const earthAmericaIcon = faEarthAmerica as IconProp;
const keyboardIcon = faKeyboard as IconProp;
const circleQuestionIcon = faCircleQuestion as IconProp;
const plusIcon = faPlus as IconProp;
const telegramIcon = faPaperPlane as IconProp
const messageIcon = faMessage as IconProp;
const userIcon = faUser as IconProp;
const bookmarkIcon = faBookmark as IconProp;
const tiktokIcon = faTiktok as IconProp;
const videoIcon = faVideo as IconProp;
const lightbulbIcon = faLightbulb as IconProp;
const settingIcon = faGear as IconProp;
const logoutIcon = faSignOut as IconProp;

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={earthAmericaIcon}/>,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English"
        },
        {
          code: "vi",
          title: "Tiếng Việt"
        },
        {
          code: "cn",
          title: "Chinese"
        },
        {
          code: "en",
          title: "English"
        },
        {
          code: "vi",
          title: "Tiếng Việt"
        },
        {
          code: "cn",
          title: "Chinese"
        },
        {
          code: "en",
          title: "English"
        },
        {
          code: "vi",
          title: "Tiếng Việt"
        },
        {
          code: "cn",
          title: "Chinese"
        },
        {
          code: "en",
          title: "English"
        },
        {
          code: "vi",
          title: "Tiếng Việt"
        },
        {
          code: "cn",
          title: "Chinese"
        },
        {
          code: "en",
          title: "English"
        },
        {
          code: "vi",
          title: "Tiếng Việt"
        },
        {
          code: "cn",
          title: "Chinese"
        },
        {
          code: "en",
          title: "English"
        },
        {
          code: "vi",
          title: "Tiếng Việt"
        },
        {
          code: "cn",
          title: "Chinese"
        },
        {
          code: "en",
          title: "English"
        },
        {
          code: "vi",
          title: "Tiếng Việt"
        },
        {
          code: "cn",
          title: "Chinese"
        },
        {
          code: "en",
          title: "English"
        },
        {
          code: "vi",
          title: "Tiếng Việt"
        }
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={circleQuestionIcon}/>,
    title: "Feedback and help",
    to: "/feedback"
  },
  {
    icon: <FontAwesomeIcon icon={keyboardIcon}/>,
    title: "Keyboard shortcuts"
  }
]

const MENU_USER_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={userIcon}/>,
    title: "View Profile",
    to: "/profile"
  },
  {
    icon: <FontAwesomeIcon icon={bookmarkIcon}/>,
    title: "Favorites",
    to: "/favorites"
  },
  {
    icon: <FontAwesomeIcon icon={tiktokIcon}/>,
    title: "Get coins",
    to: "/getcoins"
  },
  {
    icon: <FontAwesomeIcon icon={videoIcon}/>,
    title: "LIVE Studio",
    to: "/studio"
  },
  {
    icon: <FontAwesomeIcon icon={lightbulbIcon}/>,
    title: "LIVE Creator Hub",
    to: "/creator"
  },
  {
    icon: <FontAwesomeIcon icon={settingIcon}/>,
    title: "Settings",
    to: "/settings"
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={logoutIcon}/>,
    title: "Logout",
    to: "/logout",
    separate: true
  },
]

const Header: FunctionComponent = () => {

  const currentUser = true;
  const handleMenuChange = (item: object) => {
    console.log(item);
    // Switch case
  }

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <Link to={config.routes.home} className={cx('logo-link')}><img src={images.logo} alt="Tiktok"/></Link>
        </div>

        {/*Search*/}
        <Search/>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <div className={cx('action-list')}>
                <Button outline leftIcon={<FontAwesomeIcon icon={plusIcon}/>}>
                  Upload
                </Button>

                <Tippy content="Messages" placement={bottom}>
                  <button className={cx('action-btn')}>
                    <FontAwesomeIcon icon={telegramIcon}/>
                  </button>
                </Tippy>

                <Tippy content="Inbox" placement={bottom}>
                  <button className={cx('action-btn')}>
                    <FontAwesomeIcon icon={messageIcon}/>
                  </button>
                </Tippy>
              </div>
            </>
          ) : (
            <>
              <div>
                <Tippy content="Upload video">
                  <Button outline leftIcon={<FontAwesomeIcon icon={plusIcon}/>
                  }>Upload
                  </Button>
                </Tippy>
                <Button onClick={() => {
                }} primary>Log in</Button>
                {/*<Button onClick={() => {}} outline rightIcon={<FontAwesomeIcon icon={signInIcon}/>}>Log in</Button>*/
                }
              </div>
            </>
          )}
          <MenuWrapper items={currentUser ? MENU_USER_ITEMS : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image className={cx('user-avatar')}
                     src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310534616342298629~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1703671200&x-signature=bCKo2J5rGpINwcPkq4az386sGx0%3D"
                     alt=""/>
            ) : (
              <div className={cx('more-choice')}>
                <FontAwesomeIcon icon={ellipsisVerticalIcon}/>
              </div>
            )}
          </MenuWrapper>
        </div>
      </div>
    </header>
  )
}

export default Header;