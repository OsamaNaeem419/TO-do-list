import {Task} from './Task'

export const Tasks = ({Tasks, onDelete, onToggle}) => { 
  
    
    
    return (

        <>
        
        {Tasks.map((task) => (
           <Task key={task.id} task = {task} onDelete = {onDelete} onToggle ={onToggle} /> ) )
            
          } 
        </>
    )
}
