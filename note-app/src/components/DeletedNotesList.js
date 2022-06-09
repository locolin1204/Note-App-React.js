import React, { useState } from "react";
import DeletedNotes from "./DeletedNotes";

const DeletedNotesList = ({
	deleteNotes,
	handleDeleteForever,
	handleRestoreNote,
    handleClearAll
}) => {
	return (
		<div className="delete-notes-list">
			<h3 className="delete-notes-heading">Deleted Notes <button className="clearall-button" onClick={()=>{handleClearAll()}}>Clear</button></h3>
			{deleteNotes.map(deleteNote => (
				<div key={deleteNote.id}>
					<DeletedNotes
						id={deleteNote.id}
						text={deleteNote.text}
						date={deleteNote.date}
						deleteNote={deleteNote}
						handleRestoreNote={handleRestoreNote}
						foreverDelete={handleDeleteForever}
					/>
				</div>
			))}
		</div>
	);
};

export default DeletedNotesList;
