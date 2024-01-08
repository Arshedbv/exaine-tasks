import React, { useState } from 'react'

export default function TaskItem({ task, updateTask, deleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(task.title);
    const handleSave = () => {
        updateTask(task.id, { ...task, title: updatedTitle });
        isEditing(false);
    }

    const handleUpdate = () => {
        setIsEditing(true);
        // setColor('#ffc900')
    }

    const handleDelete = () => {
        deleteTask(task.id)
    }

    return (
        <>
            <li style={{ listStyleType: 'none' }}>
                {isEditing ? (
                    <div>
                        {Date().getTime()}
                        <input
                            type='text'
                            value={updatedTitle}
                            onChange={(e) => {
                                setUpdatedTitle(e.target.value);
                            }}
                        >
                        </input>
                        <button onClick={handleSave}>Save</button>
                    </div>
                ) : (
                    <div className='task-list'>
                        <span style={{textDecoration: 'underline'}}>{task.title}</span>
                        <p>{task.description}</p>
                        <div className='btn-flex'>
                            <button className='update-btn' onClick={handleUpdate}>Update</button>
                            <button className='delete-btn' onClick={handleDelete}>Delete</button>
                        </div>

                    </div>
                )}
            </li>
        </>
    )
}