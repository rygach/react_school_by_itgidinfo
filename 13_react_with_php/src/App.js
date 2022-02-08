import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [t1, setT1] = useState('');
  function task1 () {
    fetch('http://unit14.ru/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({action: 1}),
    })
      .then(response => response.text())
      .then(response => {
        setT1(response);
    })
  };

  const [t2, setT2] = useState('');
  function task2 (event) {
    event.preventDefault();

    // let num1 = event.target.elements.num1.value;
    // let num2 = event.target.elements.num2.value;

    fetch('http://unit14.ru/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        action: 2,
        num1: event.target.elements.num1.value,
        num2: event.target.elements.num2.value,
      }),
    })
      .then(response => response.text())
      .then(response => {
        setT2(response);
    })
  };

  const [t3, setT3] = useState('');
  let nameFile;
  function task3(event) {
    event.preventDefault();
    

    let filename = event.target.elements.filename.value;
    let filedata = event.target.elements.filedata.value;

    fetch('http://unit14.ru/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        action: 3,
        filename: filename,
        filedata: filedata,
      })
    })
        .then(response => response.text())
        .then(response => {
          (response > 0) ? setT3(response) : setT3('false')
        })
    console.log(filename);
    filename = nameFile;
  };

  const [t4, setT4] = useState('');
  function task4(event) {
    event.preventDefault();
    
    fetch('http://unit14.ru/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        action: 4
      })
    })
      .then(response => response.text())
      .then(response => {
        setT4(response);
      })

  }

  const [t5, setT5] = useState([]);
  function task5(event) {
    event.preventDefault();

    fetch('http://unit14.ru/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        action: 5
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setT5(response);
        console.log(t5)
      })
  }

  return (
    <div>
      <hr/>
      <div>
        <h2>Время сервера</h2>
        <button onClick = {task1}>GET</button>
        <p>{ t1 }</p>
      </div>
      <hr/>
      <div>
      <h2>Случайное число между</h2>
        <form action="" onSubmit = {task2}>
          <div><input type="number" name="num1" defaultValue="30"/></div>
          <div><input type="number" name="num2" defaultValue="44"/></div>
          <button type="sumbit">Push</button>
          <p>{ t2 }</p>
        </form>
        <p></p>
      </div>
      <hr/>
      <div>
      <h2>Создание файла</h2>
        <form action="" onSubmit = {task3}>
          <div><input type="text" name="filename"/></div>
          <div><input type="text" name="filedata" /></div>
          <button type="sumbit">Push</button>
          <p>{nameFile}</p>
        </form>
        <p></p>
      </div>
      <hr/>
      <div>
      <h2>Получение данных компьютера</h2>
        <form action="" onSubmit = {task4}>
          <button type="sumbit">Push</button>
        </form>
        <p>{t4}></p>
      <hr/>
      <div>
      <h2>Получение курса валют</h2>
      <form action="" onSubmit = {task5}>
        <button type="sumbit">Push</button>
      </form>
          <ul>
            {t5.map((item, index) =>
              <li>
                {item.ccy} - {item.buy}
              </li>)}
          </ul>
      {/* <p>{!t5 === 0 ? t5[1].ccy : ''}</p>  */}
      </div>
      </div>
      </div>
  );
}

export default App;
