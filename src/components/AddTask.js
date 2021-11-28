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
      <div className='form-control'>
        <label>Set reminder</label>
        <input type='checkbox' />
      </div>
      <input type='submit' value='Save Task' />
    </form>

  )
}

export default AddTask