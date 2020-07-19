import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth';
import { useState } from 'react';

import DrawerMenu from '../../components/DrawerMenu/DrawerMenu';
import HomeTask from '../../components/HomeTask/HomeTask2';
import Settings from '../../components/Settings/Settings';
import About from '../../components/About/About';

import api from '../../services/api';

import './styles.css';

const Dashboard = () => {
    const { LogoutContext } = useContext(AuthContext);
    const [ handleDrawer, setHandleDrawer ] = useState(false);

    const [ itemSelect, setItemSelect ] = useState('tasks');

    function handleLogout() {
        LogoutContext();
    }

    function handleOpenDrawer() {
        setHandleDrawer(!handleDrawer);
    }

    return (
        <div>
            <DrawerMenu 
                setItemSelect={(data) => {
                    setItemSelect(data)
                }}
                open={handleDrawer}
                teste={() => setHandleDrawer(false)}
            />
                    
            <header className='header'>
                <button id='drawer_button' onClick={handleOpenDrawer}></button> 
                <h1>OneTask</h1>
                <button onClick={handleLogout} id='logout_button'><a style={{textDecoration:'none', color:'#FF776E'}} href=''>LOGOUT</a></button>
            </header>

            <main>
                {itemSelect === 'tasks' && <HomeTask />}
                {itemSelect === 'settings' && <Settings />}
                {itemSelect === 'about' && <About />}
            </main>
        </div>
    )
}

export default Dashboard;