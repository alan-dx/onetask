import React, {Component} from 'react';
import './styles.css';
import Task from '../Task/Task';
import { loadData } from '../../services/api';

import Add_Modal from '../../components/Add_Modal';
import { createTask, deleteTask, editTask } from '../../services/api';

class HomeTask extends Component {

    constructor() {
        super();
        this.state = {
            todos:[]
        }

        loadData().then(async (response) => {
            let state = this.state;
            state.todos = []
            let data = response.data.listTasksToGo;
 
            await data.map(task => {
                 state.todos.push(task)
            });

            this.setState(state);
        });

        this.handleCreateTask = this.handleCreateTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleOpenEditTask = this.handleOpenEditTask.bind(this);
    };

    handleCreateTask(data) {

        createTask(data).then(res => {
            this.setState({todos: [...this.state.todos, res.data]})
        });

    };

    handleDeleteTask(taskId) {

        deleteTask(taskId)
        this.setState({ todos: [...this.state.todos.filter(todo => todo._id !== taskId)]})
        
    };

    handleOpenEditTask(data) {
    };


    render() {
        return (
            <div className='home-task'>
                {this.state.todos.map((todo) => (
                    <Task data={todo} editTask={this.handleOpenEditTask} deleteTask={this.handleDeleteTask} />
                ))}

                <div className='btn-add-area'>
                    <Add_Modal addTask={this.handleCreateTask} />
                </div>
            </div>
        );
    }
}

export default HomeTask;