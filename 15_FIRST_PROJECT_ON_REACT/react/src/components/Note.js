import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import env from '../env.json';

function Note() {
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');
    
  let { noteURL } = useParams();

  
  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ "url": noteURL })
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          if (response.result) {
            setNoteText(response.note);
            setLineClass('');
            setFormClass('hide');
            setErrorClass('hide');
          }
          else if (!response.result) {
            setLineClass('hide');
            setFormClass('hide');
            setErrorClass('');
          }
        })
    }
    else {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('hide');
    }
  }, []);

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      alert('Заполните поля');
      return false;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;

  }

  function searchNote() {
    window.location.href = env.url;
  }

  return (
    <div>
      <div className={ lineClass }>
        <h4>Note:</h4>
        <div>{noteText}</div>
        <button onClick={searchNote}>Смотреть ещё один Note</button>
      </div>
      <div className={ errorClass }>
        <p>Произошла ошибка, попробуйте ещё раз</p>
      </div>
      <div className={formClass}>
        <form onSubmit={ getNote }>
          <label htmlFor="url">Введите hash заметки</label>
          <input type="text" name='url' id='url' className='form-control' />
          <button type='submit' className='btn btn-primary'>Искать Note</button>
        </form>
      </div>
    </div>
  );
}

export default Note;
