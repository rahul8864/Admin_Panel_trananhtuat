import React from 'react'
import statusCardStyles from './statusCard.module.scss'

export default function StatusCard(props) {
  return (
    <div className={statusCardStyles.statusCard}>
      <div className={statusCardStyles.statusCardIcon}>
        <i className={props.icon}></i>
      </div>
      <div className={statusCardStyles.statusCardInfo}>
        <h4>{props.count}</h4>
        <span>{props.title}</span>
      </div>
    </div>
  )
}
