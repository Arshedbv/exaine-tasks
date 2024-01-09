import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
    // Load tasks from local storage on component mount
    const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [tasks, setTasks] = useState(initialTasks);

    // Load username from local storage on component mount
    const initialUser = localStorage.getItem('user') || '';
    const [user, setUser] = useState(initialUser);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        try {
            // Save tasks and username to local storage whenever the respective states change
            localStorage.setItem('tasks', JSON.stringify(tasks));
            localStorage.setItem('user', user);
        } catch (error) {
            console.error('Error updating localStorage:', error);
        }
    }, [tasks, user]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const updateTask = (taskId, updatedTask) => {
        setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const handleUsernameChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            setUser(userInput);
        }
    };

    const handleDeleteUsername = () => {
        setUser('');
        setUserInput('');
    };

    const task_count = tasks.length;

    return (
        <div className='body-wrap'>
            <h1 className='text-align-h1-center'>Exaine-Tasks</h1>
            <div>
                {user ? (
                    <div className='username'>
                        <h1 style={{ textAlign: 'initial' }}>Heyyy {user}</h1>
                        <button onClick={handleDeleteUsername} className='edit-btn'><img src='./edit.svg' alt='delete-user'></img></button>
                    </div>
                ) : (
                    <div>
                        <div className='body-wrap'>
                            what should i call you ? :
                            <input
                                type="text"
                                value={userInput}
                                onChange={handleUsernameChange}
                                onKeyPress={handleEnterKey}
                            />
                        </div>
                    </div>
                )}
            </div>
            <p>You have {task_count} tasks to finish</p>
            <div>
                <TaskForm addTask={addTask} />
                <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
            </div>
        </div>
    );
}
