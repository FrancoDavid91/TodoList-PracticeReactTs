import { useState } from "react"
import { ListTask } from "./ListTask"

export const TodoApp = () => {

    const [newTask, setNewTask] = useState<string>('')
    const [listTask, setListTask] = useState<string[]>([])

    const handleAddTask = () => {
        if(newTask.trim() === '') return
        setListTask(taskStack => [...taskStack, newTask])
        setNewTask('')
    }

    const handleDeleteTask = (index: number) => {
        setListTask(taskStack => taskStack.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div className="task-input-container">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e)=>setNewTask(e.target.value)}
                    placeholder="Nueva Tarea"
                />
                <button onClick={handleAddTask}>🆗</button>
            </div>
        <ListTask listTask={listTask} deleteTask={handleDeleteTask}></ListTask>
        </div>

    )
}