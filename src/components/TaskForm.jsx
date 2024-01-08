import React, { useState } from 'react';

export default function TaskForm({ addTask }) {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle.trim() === '') {
            alert('Task title cannot be empty');
            return;
        }

        const newTask = {
            id: new Date().getTime(),
            title: taskTitle,
            description: taskDescription,
            completed: false
        };

        addTask(newTask);
        setTaskTitle('');
        setTaskDescription('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='body-wrap'>
                <label>
                    Title:
                    <br></br>
                    <input
                        type='text'
                        value={taskTitle}
                        placeholder='Enter task title...'
                        onChange={(e) => { setTaskTitle(e.target.value) }}
                        className='input-text'
                    />
                </label>
                <label>
                    Description:
                    <br></br>
                    <textarea
                        type='text'
                        value={taskDescription}
                        placeholder='Enter task description'
                        onChange={(e) => { setTaskDescription(e.target.value) }}
                    />
                </label>
                <button type='submit' className='submit-btn'>
                    Add task
                </button>
            </form>
        </>
    );
}
