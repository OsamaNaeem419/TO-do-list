import { AddTask } from "./components/AddTask";
import { useState } from "react";
import {Tasks} from "./components/Tasks";
import {Header} from "./components/Header";
import   Axios  from "axios";
function App() {
  const [tasks, setTasks] = useState([
    
  ])
  const [showAddTask, setShowAddTask] = useState(false)



  
// Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 ) + 1
 const newTask  = {id, ...task}
  setTasks([...tasks, newTask])
}




  //Delete task
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  
// reminder function
const toggleReminder = (id) => {
setTasks(
  tasks.map((task) =>
  task.id == id ? {...task, reminder: !task.reminder  } : task)
) 
}
  return (
    <div className="container">
      <Header onAdd ={() => setShowAddTask(!showAddTask)}/>
     {showAddTask && <AddTask onAdd= {addTask} /> }
      {tasks. length > 0 ? <Tasks Tasks= {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} /> 
      : 'no task available'}
      
    </div>
  );


}

export default App;
