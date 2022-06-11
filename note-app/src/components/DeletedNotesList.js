import React, { } from "react";
import DeletedNotes from "./DeletedNotes";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

const DeletedNotesList = ({
	deleteNotes,
	handleDeleteForever,
	handleRestoreNote,
	handleClearAll,
}) => {
	return (
		<div className="delete-notes-list">
			<h3 className="delete-notes-heading">
				Deleted Notes{" "}
				<button
					className="clearall-button"
					onClick={() => {
						handleClearAll();
					}}
				>
					Clear
				</button>
			</h3>
			<AnimatePresence>
				{deleteNotes.map((deleteNote, index) => (
					<div key={deleteNote.id}>
						<DeletedNotes
							id={deleteNote.id}
							text={deleteNote.text}
							date={deleteNote.date}
							deleteNote={deleteNote}
							handleRestoreNote={handleRestoreNote}
							foreverDelete={handleDeleteForever}
							index={index}
						/>
					</div>
				))}
			</AnimatePresence>
		</div>
	);
};

export default DeletedNotesList;
