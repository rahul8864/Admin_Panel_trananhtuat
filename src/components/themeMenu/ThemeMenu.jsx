import React, {useRef, useState, useEffect} from 'react'
import themeStyles from './theme.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'

const mode_settings = [
    {id: 'light', name: "Light", background: 'light-background', class: 'theme-mode-light'},
    {id: 'dark', name: "Dark", background: 'dark-background', class: 'theme-mode-dark'},
]

const color_settings = [
    {id: 'red', name: "Red", background: 'red-color', class: 'theme-color-red'},
    {id: 'blue', name: "Blue", background: 'blue-color', class: 'theme-color-blue'},
    {id: 'cyan', name: "Cyan", background: 'cyan-color', class: 'theme-color-cyan'},
    {id: 'green', name: "Green", background: 'green-color', class: 'theme-color-green'},
    {id: 'orange', name: "Orange", background: 'orange-color', class: 'theme-color-orange'},
    
]

const clickOutsideRef = (content_ref, toggle_ref) => {
    const active = `${themeStyles.active}`
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

export default function ThemeMenu() {

    const style = `${themeStyles.themeMenuActive}`

    const menu_ref = useRef(null)
    const menu_toggle_ref = useRef(null)

    clickOutsideRef(menu_ref, menu_toggle_ref)
    const setActiveMenu = () => menu_ref.current.classList.add(style)
    const closeMenu = () => menu_ref.current.classList.remove(style)

    const [currentMode, setCurrentMode] = useState('light')
    const [currentColor, setCurrentColor] = useState('blue')

    const dispatch = useDispatch()

    const setMode = mode => {
        setCurrentMode(mode.id)
        localStorage.setItem('themeMode', mode.class)
        dispatch(ThemeAction.setMode(mode.class))
    }

    const setColor = color => {
        setCurrentColor(color.id)
        localStorage.setItem('colorMode', color.class)
        dispatch(ThemeAction.setColor(color.class))

    }

    useEffect(() => {
        const themeClass = mode_settings.find(e => e.class === localStorage.getItem('themeMode'))
        const colorClass = color_settings.find(e => e.class === localStorage.getItem('colorMode'))
        if(themeClass !== undefined) setCurrentMode(themeClass.id)
        if(colorClass !== undefined) setCurrentColor(colorClass.id)
    },[])

  return (
    <>
      <button ref={menu_toggle_ref} className={themeStyles.dropdownToggle} onClick={() => setActiveMenu()}>
        <i className="bx bx-palette"/>
      </button>
      <div ref={menu_ref} className={themeStyles.themeMenu} onClick={() => closeMenu()}>
        <h4>Theme Settings</h4>
        <button className={themeStyles.themeMenuClose}>
         <i className='bx bx-x'></i>
        </button>
        <div className={themeStyles.themeMenuSelect}>
            <span>Choose mode</span>
            <ul className={themeStyles.themeMenuModeList}>
                {mode_settings.map((item, index) => (
                    <li key={index} onClick={() => setMode(item)}>
                        <div className={`mode-list__color ${themeStyles.themeMenuModeListColor} ${item.background} ${item.id === currentMode && themeStyles.themeMenuModeListColorActive}`}>
                          <i className='bx bx-check'></i>
                        </div>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className={themeStyles.themeMenuSelect}>
            <span>Choose color</span>
            <ul className={themeStyles.themeMenuModeList}>
                {color_settings.map((item, index) => (
                    <li key={index} onClick={() => setColor(item)}>
                        <div className={`mode-list__color ${themeStyles.themeMenuModeListColor} ${item.background} ${item.id === currentColor && themeStyles.themeMenuModeListColorActive}`}>
                          <i className='bx bx-check'></i>
                        </div>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </>
  )
}
