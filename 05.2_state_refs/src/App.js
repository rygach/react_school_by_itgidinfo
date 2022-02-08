import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  const [st1, setSt1] = useState();
  let refTask1 = React.createRef();
  function task1() {
    setSt1(refTask1.current.value);
    refTask1.current.value = '';
  }

  const [st2, setSt2] = useState(0);
  let task2Count = st2;
  function task2() {
    setSt2(task2Count++);
  }

  const [st3, setSt3] = useState();
  function task3(event) {
    setSt3(event.target.value);
  }

  const [st4, setSt4] = useState(0);
  let task4Count = st4;
  function task4() {
    setSt4(task4Count++);
  }

  const [st5, setSt5] = useState(0);
  function task5(event) {
    if (event.target.checked)
    { setSt5(event.target.value); }
    else
    { setSt5(0); }
  }

  const [st6, setSt6] = useState();
  let refTask6 = React.createRef();
  function task6() {
    setSt6(refTask6.current.value);
  }

  const [st7, setSt7] = useState();
  function randomInt() {
    let min = 0;
    let max = 255;
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function task7() {
    setSt7(`rgb(${randomInt()},${randomInt()},${randomInt()})`);
  }

  const [st8, setSt8] = useState(0);
  function task8(event) {
    if (!isNaN(event.key)) {
      setSt8(st8 + '1');
    } else {
      setSt8(st8 + '0');
    }

  }

  const [st9, setSt9] = useState();
  function task9(event) {
    setSt9(event.target.value);
  }

  const [st10, setSt10] = useState([]);
  let refTask10 = React.createRef(0);
  function task10() {
    let st10Value = refTask10.current.value;
    let sup = [...st10, st10Value];
    console.log(sup);
    console.log(st10);
    setSt10(sup);
    refTask10.current.value = '';
  }


  return (
    <>
      <h1>События</h1>
      
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={refTask1}/>
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
        <div>{st3}</div>
      </section>
      
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5}/>
        <div>{st5}</div>
      </section>
      
      <section>
        <h2>Task 6</h2>
        <select className="task-6" ref={refTask6} onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      
      <section>
        <h2>Task 7</h2>
        <div className="block-7" style={{background: st7}}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
     
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={refTask10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10}</div>
      </section>
      
    </>
  );
}

export default App;
