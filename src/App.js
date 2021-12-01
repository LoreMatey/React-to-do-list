import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        title: 'Meeting with friends',
        day:'Nov 29th at 8:00 pm',
        reminder: true,
    },
    {
        id: 2,
        title: 'Vet appointment',
        day: 'Dec 9th at 2:00 pm',
        reminder: 'true',
    },
    {
        id: 3,
        title: 'Soul Garden concert',
        day: 'Dec 17th at 9:30 pm',
        reminder: 'false',
    },
    // {
    //     id:
    //     title:
    //     day:
    //     reminder: 
    // }
])

// Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Reminder

const reminder = (id) => {
  setTasks(
    tasks.map((task) =>
    task.id === id ? { ...task, reminder: !task.reminder } : task
    )
  )
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={reminder} /> 
        ) : ('No tasks to show')
        }
    </div>
  );
}

export default App;
