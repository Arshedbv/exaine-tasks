import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
export default function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const updateTask = (taskId, updatedTask) => {
        setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className='body-wrap'>
            <h1>Exaine-Tasks</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
            
        </div>
    );
}
