import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  let textInput = React.createRef();
  let textOutput = React.createRef();

  function task1() {
    console.log('task2');
  }

  function task2(event) {
    let act = 'task-2 active';
    event.target.className = act;
  }
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    console.log(count4++);
  }
  function task5(event) {
    // console.log(event);
    if (event.target.checked)
    { textOutput.current.innerHTML = textInput.current.value; }
    else
    { textOutput.current.innerHTML = 0 }

  }

  let textInput6 = React.createRef();
  let textOutput6 = React.createRef();
  const [textOut6, setOutput] = useState();
  function task6() {
    textOutput6.current.innerHTML = textInput6.current.value;
    setOutput(textInput6.current.value);
  }

  function randomInt(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }

  let in7 = React.createRef();
  function task7() {
    let c1 = randomInt(0, 255);
    let c2 = randomInt(0, 255);
    let c3 = randomInt(0, 255);
    console.log(c1, c2, c3);
    in7.current.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  }
  
  let in8 = React.createRef();
  let out8 = React.createRef();
  const [symbol, setSymbol] = useState('');
  function task8(event) {
     if (!isNaN(event.key)) {
      console.log(setSymbol(symbol + '1'));
    } else {
      console.log(setSymbol(symbol + '0'));
    }
  }

  let in9 = React.createRef();
  let out9 = React.createRef();
  function task9() {
    out9.current.innerHTML = in9.current.value;
  }

  let ar10 = [5, 6, 7];
  let in10 = React.createRef();
  function task10() {
    ar10.push(in10.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button onClick={task1} className="task-1">Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" ref={textInput} onChange={task5}/>
        <div className="out-5" ref={textOutput}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" ref={textInput6} onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <h1 ref={textOutput6}></h1>
        <h3>{textOut6}</h3>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={in7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" ref={in8} onKeyPress={task8}></input>
        <div className="out-8" ref={out8}>{symbol}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" ref={in9} onInput={task9}></input>
        <div className="out-9" ref={out9}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={in10}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
