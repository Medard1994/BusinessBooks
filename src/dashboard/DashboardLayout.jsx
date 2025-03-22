import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar' // Ensure this is a default export in SideBar.jsx

const DashboardLayout = () => {
    return (
        <div className='flex gap-4 flex-col md:flex-row mt-[100px]'>
            <SideBar />
            <Outlet />
        </div>
    )
}

export default DashboardLayout
