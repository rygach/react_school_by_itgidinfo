import React, {createRef, useState} from 'react';

import './App.css';

function App() {
  
  const h1 = React.createElement('h1', {}, 'unit_08');
  const h2 = React.createElement('h2', {
    'className': 'text-orange'
  }, 'header 2');
  const p = React.createElement('p', {
    'style': {
      'color': 'red'
    }
  }, 'this is p');
  const input = React.createElement('input', {value: 55});
  const p1 = React.createElement('p', {'key': 1}, 'hi');
  const p2 = React.createElement('p', {'key': 2}, 'world');
  const div = React.createElement('div', {'className': 'text-grey'}, p1, p2);
  const cE = React.createElement;
  
  const [out, setOut] = useState([]);
  const inputRef = React.createRef();
  function createLi() {
    if (inputRef.current.value !== '') {
      setOut([...out, inputRef.current.value]);
    }
  }

  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      <div>
        <input type="text" ref={inputRef}/>
        <button onClick={createLi}>Push it</button>
        <ul>{out.map(item => <li>{item}</li>)}</ul>
      </div>
    </>
  );
}

export default App;
