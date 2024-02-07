import React from 'react';
import DashboardNav from './dashboard-nav';
import RightSidebar from './right-sidebar';
import { Outlet } from 'react-router-dom';
import TweetsContext from '../context/TweetsContext';
import InitialData from "../data/initial-data.json";


export default function Layout() {

    return (
        <>
                <DashboardNav />
                {/* <LeftSidebar /> */}
                <Outlet />
                <RightSidebar />
        </>
    );
};