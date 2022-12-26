import React,{useRef} from 'react'
import dropdownStyles from './dropdown.module.scss'

const clickOutsideRef = (content_ref, toggle_ref) => {
    const active = `${dropdownStyles.active}`
    document.addEventListener('mousedown', (e) => {
        if(toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle(active)
        } else {
            if(content_ref.current && content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove(active)
            }
        }
    })
}

export default function Dropdown(props) {
    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)
    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)
  return (
    <div className={dropdownStyles.dropdown}>
        <button ref={dropdown_toggle_el} className={dropdownStyles.dropdownToggle}>
            {props.icon && <i className={props.icon}/>}
            {props.badge && <span className={dropdownStyles.dropdownToggleBadge}>{props.badge}</span>}
            {props.customToggle && props.customToggle()}
        </button>
        <div ref={dropdown_content_el} className={dropdownStyles.dropdownContent}>
            {props.contentData && props.renderItems && props.contentData.map((item, index) => props.renderItems(item, index))}
            {props.renderFooter && <div className={dropdownStyles.dropdownFooter}>{props.renderFooter()}</div>}
        </div>
    </div>
  )
}
