import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";


const App = () => {

  const originalNotes = [
    {
			id: nanoid(),
			text: 'This is my FIRST Note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'You can ADD or DELETE notes.',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'See what happens if you refresh or reopen the tab!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'Toggle between DARK and LIGHT mode to have some FUN!',
			date: '30/04/2021',
		},
  ];

	const [notes, setNotes] = useState(originalNotes);

  const[darkMode, setDarkMode] = useState(false);

  const [searchText, setSearchText] = useState("");

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
      console.log("hihi");
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }


  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const setReset = () => {
    setNotes(originalNotes);
  }

  const deleteAll = () => {
    setNotes([]);
  }

  return (
    <div className={`${darkMode && "dark-mode"} light-mode`}>
      <div className="container">
      <Header
        handleToggleDarkMode = {setDarkMode}
        handleReset = {setReset}
        handleDeleteAll = {deleteAll}
        />
      <Search handleSearchNote = {setSearchText} />
      <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))}
        handleAddNote = {addNote}
        handleDeleteNote = {deleteNote}
      />
      </div>
    </div>
  )
};

export default App;