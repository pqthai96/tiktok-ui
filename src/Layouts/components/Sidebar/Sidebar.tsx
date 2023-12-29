import classNames from "classnames/bind";

import {FunctionComponent} from "react";
import styles from "./Sidebar.module.scss"
import {Menu, MenuItem} from "./Menu";
import config from "../../../config";
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon
} from "../../../components/Icons";
import SuggestedAccounts from "../../../components/SuggestedAccounts";

const cx = classNames.bind(styles);
const Sidebar: FunctionComponent = () => {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
        <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>}
                  activeIcon={<UserGroupActiveIcon/>}/>
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
      </Menu>

      <SuggestedAccounts label="Suggested accounts"/>
    </aside>
  )
}

export default Sidebar;