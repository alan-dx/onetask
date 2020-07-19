import React from 'react';
import './styles.css';
import { FiTrash2 } from 'react-icons/fi';
import EditModal from '../Edit_Modal';

import { editTask } from '../../services/api';


const Task = (props) => {

    const { title, date, hour } = props.data;
    
    function handleEditTask(data) {
        editTask(data)
        window.location.reload(false)//Force Update temporarry
    };

    return (
        <div className='box'>
            <div id='info_top'>
                <EditModal editTask={handleEditTask} data={props.data} />
                <h1>{title}</h1>
                <button onClick={() => props.deleteTask(props.data._id)} style={{border: 0, outline: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}>
                        <FiTrash2 style={{width:20, height: 20}} />
                </button>
            </div>
            <br/>
            <div id='info_bottom'>
                <strong>{date}</strong>
                <strong>{hour}</strong>
            </div>
        </div>
    );
}

export default Task;