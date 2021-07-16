import React from 'react'

const Task = (props) => {
    const {task, list, id, setList} = props;

    const onClick = e =>{
        const filterdList = list.filter(task => task.id !== id)
        setList(filterdList)
        
    }

    const onCheckbox = id => {
       console.log(task.isCompleted)
       const temp = {
           ...list[id],
           isCompleted: !list[id].isCompleted,
           color: !task.isCompleted ? 'success' : 'dark'
       }

       setList([
           ...list.slice(0,id),
           temp,
           ...list.slice(id+1)
       ])
    }

    return(
        <div className={`container w-85 text-light text-center bg-${task.color} m-1`}>
            <h4>{task.name}</h4>
            <label htmlFor='checkbox'>Complete?</label>
            <input className='m-1'onChange={()=> onCheckbox(id)} type='checkbox' name='checkbox'/>
            <button className='btn btn-danger m-1 w-75' onClick={onClick}>Deleto</button>    
        </div>
    )
}

export default Task