import React from 'react';
import Note from "./Note";
import AddNote from "./AddNote";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

const enterAnimation = {
	initial: { y: "10%", opacity: 0 },
	animate: { y: 0, opacity: 1 },
	transition: { duration: 0.4, ease: "easeInOut" },
};

export { enterAnimation }

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
			<div className="notes-list">
				{notes.map(note => (
					<Note
						id={note.id}
						text={note.text}
						date={note.date}
						handleDeleteNote={handleDeleteNote}
					/>
				))}
				<AddNote handleAddNote={handleAddNote} />
			</div>
		);
}

export default NotesList;