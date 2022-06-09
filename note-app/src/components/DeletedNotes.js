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
			<div className="delete-note-left">
				<MdSettingsBackupRestore
					className="restore-icons"
					size="1.3em"
					onClick={() => {
						handleRestoreNote(deleteNote);
					}}
				/>
				<div className="delete-note-text">{text}</div>
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
