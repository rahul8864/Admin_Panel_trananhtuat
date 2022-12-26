import React from 'react'
import badgeStyles from './badge.module.scss'

// const badgeStyle = {
//     danger: 'badge-danger',
//     danger: 'badge-danger',
//     danger: 'badge-danger',
//     danger: 'badge-danger',
// }

export default function Badge(props) {
    // console.log(props.type)
    // console.log(props.type.charAt(0).toUpperCase() + props.type.slice(1))
  return (
    <span className={`${badgeStyles.badge} ${props.type === 'success' ? badgeStyles.badgeSuccess : props.type === 'warning' ? badgeStyles.badgeWarning : props.type === 'danger' ? badgeStyles.badgeDanger : badgeStyles.badgePrimary}`}>
      {props.content}
    </span>
  )
}
