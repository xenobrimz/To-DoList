import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react';
import Input from './Components/taskInputComponent'
import Task from './Components/taskComponent'

function App() {
  const [list, setList] = useState([]);

  return (
    <div className='container w-50 d-flex flex-column justify-content-center'>
      <Input list={list} setList={setList}/>       
      {list.map(task => (
        <Task key={list.indexOf(task)} task={task} list={list} id={task.id} setList={setList} />
      ))}
    </div>
  );
}

export default App;
