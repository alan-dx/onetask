import React from 'react';
import Drawer from 'react-motion-drawer';
import { GoListUnordered } from "react-icons/go";
import { BsFillGearFill, BsFillQuestionCircleFill } from "react-icons/bs";

import './styles.css';

const DrawerMenu = (props) => {

    function handleSelectItemMenu(data) {
        props.setItemSelect(data);
    }

    return (
        <Drawer open={props.open} fadeOut width={300} drawerStyle={styled} >
            <header style={styled.header}>MENU</header>
            <main>
                <div style={styled.options}>
                    <ul style={styled.ul}>
                        <li style={styled.li}><button style={styled.btn} onClick={() => handleSelectItemMenu('tasks')} ><GoListUnordered /><label>MINHAS TAREFAS</label></button></li>
                        <li style={styled.li}><button style={styled.btn} onClick={() => handleSelectItemMenu('settings')} ><BsFillGearFill /><label>CONFIGURAÇÕES</label></button></li>
                        <li style={styled.li}><button style={styled.btn} onClick={() => handleSelectItemMenu('about')} ><BsFillQuestionCircleFill /><label>SOBRE</label></button></li>
                    </ul>
                </div>
            </main>
            <footer style={styled.footer}>
                <strong>Developed by: Alan Almeida (GitHub: alan-dx)</strong>
            </footer>
      </Drawer>
    );

};

const styled = {
    color:' #6C6C80',
    backgroundColor: '#ffffff',
    header: {
        fontSize: 25, 
        textAlign: 'center', 
        color: 'white',
        fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
        fontWeight: 'bold',
        width:'100%',
        paddign:5,
        backgroundColor: '#FF776E',
    },
    options: {
        textDecoration: 'none',
        display: 'flex',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    ul: {
        width: '100%',
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    li: {
        width: '95%',
        backgroundColor: '#F0F0F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: 5,
        borderRadius: 5,
        borderColor: '#FF776E',
        borderWidth: 1,
    },
    btn: {
        width: '100%',
        border: 0,
        backgroundColor: 'transparent',
        fontSize: 20,
        fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
        color: '#303030',
        fontWeight: 'bold',
        paddingRight: 5,
        paddingLeft: 5,
        outline: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
}

export default DrawerMenu;