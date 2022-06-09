import React, { useState } from "react";
import { GoX } from "react-icons/go";
import { MdSettingsBackupRestore } from "react-icons/md";

const DeletedNotes = ({
	id,
	text,
	date,
	deleteNote,
	handleRestoreNote,
	foreverDelete,
}) => {
	return (
		<div className="delete-note">
			<MdSettingsBackupRestore
				className="restore-icon"
				size="1.3em"
				onClick={() => {
					handleRestoreNote(deleteNote);
				}}
			/>
			<div className="delete-note-middle">
				<div className="delete-note-text">{text}</div>
				<div className="delete-note-date">{date}</div>
			</div>

			<GoX
				className="cross-icon"
				size="1.3em"
				onClick={() => {
					foreverDelete(deleteNote);
				}}
			/>
		</div>
	);
};

export default DeletedNotes;
