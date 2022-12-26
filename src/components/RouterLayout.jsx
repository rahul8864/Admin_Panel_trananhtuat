import React from 'react'
import {Routes, Route, Router} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers';
import Sidebar from './sidebar/Sidebar';

export default function RouterLayout() {
  return (
    <Routes>
    {/* <Route render={props => <Sidebar {...props}/>}> */}
        {/* <Route path='/' exact render={(props) => <Dashboard {...props}/>}/> */}
        <Route path='/' exact element={<Dashboard/>}/>
        <Route path='/customers' element={<Customers/>}/>
        {/* </Route> */}
    </Routes>
  )
}
