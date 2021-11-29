const AddTask = () => {
  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add task' />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add day and time' />
      </div>
      <div className='form-control checkbox-container'>
        <input type='checkbox' id='custom'/>
        <label htmlFor='custom'>Set reminder</label>
      </div>
      <input type='submit' value='Save Task' />
    </form>

  )
}

export default AddTask