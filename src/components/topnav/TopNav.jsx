import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import topnavStyles from './topnav.module.scss'
import notifications from '../../assets/JsonData/notification.json'
import user_menu from '../../assets/JsonData/user_menus.json'
import user_image from '../../assets/images/tuat.png'
import { Link } from 'react-router-dom';
import ThemeMenu from '../themeMenu/ThemeMenu'

const curr_user = {
    display_name: "Rahul Kumar",
    image: user_image
}

const renderNotificationItem = (item, index) => {
    return (
    <div className={topnavStyles.NotificationItem} key={index}>
        <i className={item.icon}/>
        <span>{item.content}</span>
    </div>
    )
}

const renderUserToggle = (user) => {
    return (
    <div className={topnavStyles.topnavRightUser}>
        <div className={topnavStyles.topnavRightUserImage}>
            <img src={user.image} alt=""/>
        </div>
        <div className={topnavStyles.topnavRightUserName}>
            {user.display_name}
        </div>
    </div>
    )
}

const renderUserMenu = (item, index) => {
    return (
        <Link to="/" key={index}>
            <div className={topnavStyles.NotificationItem}>
                <i className={item.icon}/>
                <span>{item.content}</span>
            </div>
        </Link>
    )
}

export default function TopNav() {
  return (
    <div className={topnavStyles.topnav}>
        <div className={topnavStyles.topnavSearch}>
            <input type={'text'} placeholder={'Search here...'}/>
            <i className='bx bx-search'/>
        </div>
        <div className={topnavStyles.topnavRight}>
            <div className={topnavStyles.topnavRightItem}>
                <Dropdown customToggle={() => renderUserToggle(curr_user)} contentData={user_menu} renderItems={(item, index) => renderUserMenu(item, index)}/>
            </div>
            <div className={topnavStyles.topnavRightItem}>
                <Dropdown icon={'bx bx-bell'} badge={'12'} contentData={notifications} renderItems={(item, index) => renderNotificationItem(item, index)} renderFooter={() => <Link to={"/"}>View All</Link>}/>
            </div>
            <div className={topnavStyles.topnavRightItem}>
                <ThemeMenu />
            </div>
        </div>
    </div>
  )
}
