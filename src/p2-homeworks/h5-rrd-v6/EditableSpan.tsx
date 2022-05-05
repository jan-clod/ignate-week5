import React, { ChangeEvent, useState } from 'react'

type EditableSpanType = {
    title: string
    onChange:(newValue:string)=>void
}


export const EditableSpan = () => {
    const [title, setTitle] = useState('qwe')
    const [editMode, setEditMode] = useState(false)
    const [newTitle, setNewTitle] = useState('')

    const activateEditeMode = () => {
        setEditMode(true)
        setNewTitle(title)
    }
    const activateViewMode = () => {
        setEditMode(false)
    }
    const onChangeTitleHandler = (e:ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)

    return editMode
        ? <input
            value={newTitle}
            onChange={onChangeTitleHandler}
            onBlur={activateViewMode}
            autoFocus />
        : <span onDoubleClick={activateEditeMode}>{newTitle}</span>
}