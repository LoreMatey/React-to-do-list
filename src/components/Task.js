import { AiFillDelete } from 'react-icons/ai'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div 
      className={`task ${task.reminder ? 'reminder' : ''}`} 
      onDoubleClick={() => onToggle(task.id)}>
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