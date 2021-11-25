import Task from './Task'
import { AiFillDelete } from 'react-icons/fa'

const Tasks = ({ tasks }) => {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </>
    )
}

export default Tasks