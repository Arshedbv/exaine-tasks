import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
export default function App() {
    // Load tasks from local storage on component mount
    const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(initialTasks);

    useEffect(() => {
        // Save tasks to local storage whenever the tasks state changes
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    const user = 'Admin'
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const updateTask = (taskId, updatedTask) => {
        setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };
    const task_count = tasks.length
    return (
        <div className='body-wrap'>
            <h1 className='text-align-h1-center'>Exaine-Tasks</h1>
            <h1 style={{textAlign: 'initial'}}>Heyyy {user}</h1>
            <p>You have {task_count} tasks to finish</p>
            <div >
                <TaskForm addTask={addTask} />
                <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
            </div>
        </div>
    );
}   
