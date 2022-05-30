import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note!",
    date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "29/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my final note!",
      date: "30/04/2022",
    },
      

]);
  return (<div className="container">
    <NotesList notes={notes} />
  </div>)
};

export default App;