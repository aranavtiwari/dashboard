import React , {useState} from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { FaBuffer,FaClipboardList,FaCog,FaAngleDoubleLeft } from "react-icons/fa";
// import {Sidebar, NavItemsContainer, NavItem} from 'react-sidebar-web';

const Nav = () => {


    return (
        <>
        <div className="nav-main">
                <div className="nav">
                <Avatar className="avt">A</Avatar>
                    <p className="nav-name">Aranavsheel Tiwari</p>
                    <div>
                    <Link className="nav-val" to="/dashboard">{<FaBuffer/>} Dashboard</Link>
                    <Link className="nav-val" to="/stock">{<FaClipboardList/>} Statement</Link>
                    </div>
                    <div className="setting">
                        <div className="set">{<FaCog/>} Setting</div>
                        <div className="set">{<FaAngleDoubleLeft/>} Logout</div>
                    </div>
                    
                </div>
        </div>
        
        {/* <Sidebar>
            <NavItemsContainer>
                <NavItem to='/' label='Dashboard' exact />
                <NavItem to='/stock' label='Stock' exact />
            </NavItemsContainer>
        </Sidebar> */}
            
        </>
    )
}

export default Nav;