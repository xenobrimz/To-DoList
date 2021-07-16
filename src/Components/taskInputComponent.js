import React from 'react'

const Input = (props) => {
    const {list, setList} = props;

    let task = {
        name: '',
        isCompleted: false,
        id: list.length,
        color:'dark'
    };

    const onChangeHandler = e => {
       task.name = e.target.value
    };

    const onClick = e => {
        if(task.name.length === 0){
            return alert('Must name task')
        }
        setList([...list, task]); 
        e.target.value = ' ';
        task = ' ';
    };

    return(
        <div className='container w-100 d-flex justify-content-center m-1'>
            <input 
                onChange={onChangeHandler} 
                className='from-control w-75' 
                type='text'  
                name='task'
            />
            <button typ='submit' className='btn btn-primary w-25 ' onClick={onClick}>Add Task</button>
        </div>
    )
}

export default Input