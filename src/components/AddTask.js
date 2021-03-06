import { useState } from 'react'
const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!title) {
      alert('Please add a task')
      return
    }

    onAdd({ title, day, reminder })

    setTitle('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input 
          type='text' 
          placeholder='Add task' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input 
          type='text' 
          placeholder='Add day and time' 
          value={day} 
          onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className='form-control checkbox-container'>
        <input 
          type='checkbox' 
          id='custom' 
          checked={reminder}
          value={reminder} 
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        <label htmlFor='custom'>Set reminder</label>
      </div>
      <input type='submit' value='Save Task' />
    </form>

  )
}

export default AddTask