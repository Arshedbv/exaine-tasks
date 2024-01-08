import React, { useState } from 'react'

export default function TaskItem({task, updateTask, deleteTask}) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(task.title);

    const handleSave = () =>  {
        updateTask(task.id, {...task, title : updatedTitle});
        isEditing(false);
    }

    const handleUpdate = () => {
        setIsEditing(true);
    }

    const handleDelete = () => {
        deleteTask(task.id)
    }
  return (
    <>
    <li>
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
            <div>
                <span>{task.title}</span>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        )}
    </li>
    </>
  )
}