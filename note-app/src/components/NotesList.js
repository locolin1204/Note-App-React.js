import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

const enterAnimation = {
	initial: { y: "10%", opacity: 0 },
	animate: { y: 0, opacity: 1 },
	transition: { duration: 0.6, ease: "easeInOut" },
};

export { enterAnimation };

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
	return (
		<div className="notes-list">
			<AnimatePresence>
				{notes.map((note, index) => (
					<div key={note.id}>
						<Note
							id={note.id}
							text={note.text}
							date={note.date}
							handleDeleteNote={handleDeleteNote}
							index={index}
						/>
					</div>
				))}
			</AnimatePresence>
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;
