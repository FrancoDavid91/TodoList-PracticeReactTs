import { Task } from "./Task"

type ListTaskProps = {
    listTask: string[]
    deleteTask: (index: number) => void
}

export const ListTask = ({ listTask, deleteTask }: ListTaskProps) => {
    return (
        <div className="taskList">
            {listTask.map((task, index) => (
                <Task key={index} task={task} deleteTask={() => deleteTask(index)}></Task>
            ))}
        </div>
    )
}