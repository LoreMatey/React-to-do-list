import { AiFillDelete } from 'react-icons/ai'

const Task = ({ task }) => {
  return (
    <div className='task'>
      <h2>
        {task.title}
        <AiFillDelete className='deletion-icon' />
      </h2>
      <p>{task.day}</p>
    </div>
  )
}

export default Task