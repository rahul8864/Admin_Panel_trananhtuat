import React from 'react'
import { Link, useLocation, useMatch, useParams } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import sidebar_items  from '../../assets/JsonData/sidebar_routes.json'
import sidebarStyles from './sidebar.module.scss'

const SidebarItem = props => {
  const active = props.active ? `${sidebarStyles.active}` : ''
  return (
    <div className={sidebarStyles.sidebarItem}>
     <div className={`${sidebarStyles.sidebarItemInner} ${active}`}>
      <i className={props.icon}/>
      <span>{props.title}</span>
     </div>
    </div>
  )
}

export default function Sidebar() {
  const match = useMatch('/customers')
  const location = useLocation()
  const params = useParams()
  // console.log(params, match, location)
  // console.log(match, location, params)
  // const { username } = useParams();
  const activeItem = sidebar_items.findIndex(item => item.route === location?.pathname)
  return (
    <div className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.sidebarLogo}>
        <img src={logo} alt="" />
      </div>
      {
        sidebar_items?.map((item, index) => (
          <Link to={item.route} key={index}>
            <SidebarItem title={item.display_name} icon={item.icon} active={index === activeItem}/>
          </Link>
        ))
      }
    </div>
  )
}
