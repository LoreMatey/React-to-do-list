import { AiFillDelete } from 'react-icons/ai'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
      <h2>
        {task.title}
        <AiFillDelete 
          className='deletion-icon' 
          onClick={() => onDelete(task.id)} 
        />
      </h2>
      <p>{task.day}</p>
    </div>
  )
}

export default Task