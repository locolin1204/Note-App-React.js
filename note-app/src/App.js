import React, { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import DeletedNotesList from "./components/DeletedNotesList";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const App = () => {
	const originalNotes = [
		{
			id: nanoid(),
			text: "This is my FIRST Note!",
			date: "15/04/2021",
		},
		{
			id: nanoid(),
			text: "You can ADD or DELETE notes.",
			date: "21/04/2021",
		},
		{
			id: nanoid(),
			text: "See what happens if you refresh or reopen the tab!",
			date: "28/04/2021",
		},
		{
			id: nanoid(),
			text: "Toggle between DARK and LIGHT mode to have some FUN!",
			date: "30/04/2021",
		},
	];

  const originalDeletedNotes = [
		{
			id: nanoid(),
			text: "I am deletedddddddddddddddddddd.",
			date: "12/06/2019",
		},
	];


	const [notes, setNotes] = useState(originalNotes);
	const [darkMode, setDarkMode] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [deleteNotes, setDeleteNotes] = useState([]);

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
		const savedDeleteNotes = JSON.parse(localStorage.getItem("react-deleted-notes-app-data"));
		if (savedNotes) setNotes(savedNotes);
		if (savedDeleteNotes) setDeleteNotes(savedDeleteNotes);
	}, []);

	useEffect(() => {
		localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
	}, [notes]);

	useEffect(() => {
		localStorage.setItem("react-deleted-notes-app-data",JSON.stringify(deleteNotes));
	}, [deleteNotes]);

	const addNote = text => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const restoreNote = note => {
		const newNotes = [...notes, note];
		const newDelNotes = deleteNotes.filter(
			deleteNote => deleteNote.id !== note.id
		);
		setNotes(newNotes);
		setDeleteNotes(newDelNotes);
	};

	const deleteNote = (id, text, date) => {
		const newNotes = notes.filter(note => note.id !== id);
		setNotes(newNotes);
		createDelNotes(id, text, date);
	};

	const foreverDelete = note => {
		const newDelNote = deleteNotes.filter(
			deleteNote => deleteNote.id !== note.id
		);
		setDeleteNotes(newDelNote);
	};

  const clearAll = () => {
    setDeleteNotes([]);
  }

	const createDelNotes = (id, text, date) => {
		const newDelNote = {
			id: id,
			text: text,
			date: date,
		};
		const delNotes = [...deleteNotes, newDelNote];
		setDeleteNotes(delNotes);
	};

	const setReset = () => {
		setNotes(originalNotes);
    setDeleteNotes(originalDeletedNotes);
	};

	const deleteAll = () => {
		const delNotes = [...deleteNotes, ...notes];
    console.log(delNotes);
    setDeleteNotes(delNotes);
    setNotes([])
	};

	return (
		<div className={`${darkMode && "dark-mode"} light-mode`}>
			<div className="container">
				<Header
					handleToggleDarkMode={setDarkMode}
					handleReset={setReset}
					handleDeleteAll={deleteAll}
				/>
				<Search handleSearchNote={setSearchText} />
				<div className="container-bottom">
					<div className="left-container-bottom">
						<NotesList
							notes={notes.filter(note =>
								note.text.toLowerCase().includes(searchText.toLowerCase())
							)}
							handleAddNote={addNote}
							handleDeleteNote={deleteNote}
							// notesRef={hasRenderedNotesRef.current}
						/>
					</div>
					<div className="right-container-bottom">
						<DeletedNotesList
							deleteNotes={deleteNotes}
							handleRestoreNote={restoreNote}
							handleDeleteForever={foreverDelete}
							handleClearAll={clearAll}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
