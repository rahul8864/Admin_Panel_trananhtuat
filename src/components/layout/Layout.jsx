import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import RouterLayout from '../RouterLayout'
import stylesLayout from './layout.module.scss'
import TopNav from '../topnav/TopNav'
import { useDispatch, useSelector } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'

export default function Layout() {

    const themeReducer = useSelector(state => state.ThemeReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode')
        const colorClass = localStorage.getItem('colorMode')

        // console.log(themeClass, colorClass)
        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    },[dispatch])

    // console.log(themeReducer)

  return (
    <>
    <BrowserRouter>
    {/* <Routes>  */}
    {/* <RouterLayout/> */}
    {/* <Route exact render={props => console.log(props)}/> */}
    {/* </Routes> */}
    <div className={`${stylesLayout.layout}  ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar/>
                <div className={stylesLayout.layoutContent}>
                    <TopNav/>
                    <div className={stylesLayout.layoutContentMain}>
                        <RouterLayout/>
                    </div>
                </div>
            </div>
    </BrowserRouter>
    </>
  )
}
{/* <Routes render={(props) => (
            <div className={stylesLayout.layout}>
                <Sidebar {...props}/>
                <div className={stylesLayout.layoutContent}>
                    <div className={stylesLayout.layoutContentMain}>
                        <RouterLayout/>
                    </div>
                </div>
            </div>
        )}/> */}
        {/* <Routes render={(props) => ( */}

{/* <Sidebar/>
    <RouterLayout/> */}
        {/* <Routes render={(props) => (
            <div className='layout'>
                <Sidebar {...props}/>
                <div className='layout_content'>
                    <div className='layout_content-main'>
                        <RouterLayout/>
                    </div>
                </div>
            </div>
        )}/> */}
