import React, { useEffect } from 'react';
import './App.css';

type AppProps = { note: string };

function App({ note }: AppProps) {

  const saveNote = () => {
    let valEl = document.querySelector('.note');
    if (valEl !== null) {
      let val = valEl.textContent;
      console.log(val);
      fetch(`TEST_URL`, {
        method: 'POST',
        body: JSON.stringify(val)
      }).then(function (response) {
        return response.json();
      }).then(() => {
        alert('Successfully saved note');
      });
    }
  }

  useEffect(
    () => {
      let noteEl = document.querySelector('.note')
      if (noteEl !== null) {
        noteEl.textContent = note;
      }
    }
  )

  return (
    <div className="App">
      <header className="App-header">

        <div className="note" contentEditable="true">

        </div>

        <button onClick={saveNote} className="submit">Save</button>

      </header>
    </div>
  );
}

export default App;
