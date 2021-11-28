import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className="container">
      <Header />
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} /> 
        ) : ('No tasks to show'
        )}
    </div>
  );
}

export default App;
