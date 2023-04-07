import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import './App.css';

function App() {
  // set initial states
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  // add tasks
  const handleAddTask = () => { 
    setText(''); // reset input box
    // this somehow works
    setTasks([{
      text: text ?  text : 'Task'
    }, ...tasks])
  }
  // delete tasks
  const handleDeleteTask = (index) => {
    const newTasks = [];
    for (let i=0; i<tasks.length; i++) {
      if (index !== i) newTasks.push(tasks[i]);
    }
    setTasks(newTasks);
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAddTask();
  }
  // to change add button during resize, haha
  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  })
  // main app things
  return (
    <div className="App">
      <h1>&#9733; Isabel's Todolist &#9733;</h1>
      {/* input box + add button */}
      <hr></hr>
      <div id='inputAddDiv'>
        <input id='inputBox' value={text} onKeyDown={handleKeyDown} onChange={e => setText(e.target.value)}></input>
        <button id='addBtn' onClick={handleAddTask}>{width < 700 ? '+' : 'Add'}</button>
      </div>
      <hr></hr>
      {/* display tasks somehow */}
      {tasks.map((item, index) => (<div className='task'>
        <button onClick={(e) => {handleDeleteTask(index)}}>&#x2715;</button>
        <p><span class='star'>&#9733;</span> {item.text}</p>
      </div>))}
    </div>
  );
}

export default App;
