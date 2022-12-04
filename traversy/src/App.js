import {useState} from 'react'
import Header from './components/Header'; 
import Tasks from './components/Tasks'; 
import AddTask from './components/AddTask';


function App() {
  const [tasks, setTasks]= useState(
    [
        {
            id: 1,
            text: 'sleep all day',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'work all day',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'study all day',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
    ]
)
// add task
const addTask=(task)=>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

const  deleteTask= (id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
}


  return (
    <div className='container'>
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}/>) 
      : ("no current tasks!!!")}
    </div>
    
  );
}

export default App;
