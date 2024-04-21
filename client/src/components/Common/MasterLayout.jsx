import React from 'react';
import AppNavBar from "./AppNavBar.jsx";
import {Toaster} from "react-hot-toast";
import SideBar from "./SideBar.jsx";

const MasterLayout = (props) => {
    return (
        <div className="wrapper">
            <SideBar/>
            <AppNavBar/>
            <div className="main_content">
                {props.children}
            </div>
            <Toaster position='top-center'/>
        </div>
    )
}

export default MasterLayout;