import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState("");
	const characterLimit = 200;

	const handleChange = event => {
		if (characterLimit - event.target.value.length >= 0)
			setNoteText(event.target.value);
	};

	const handleSaveCLick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText("");
		}
	};
	return (
		<motion.div
			className="note new"
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeInOut" }}
		>
			<textarea
				rows="8"
				cols="10"
				placeholder="Type to add a note..."
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className="note-footer">
				<small>{characterLimit - noteText.length} Remaining</small>
				<button className="save" onClick={handleSaveCLick}>
					Save
				</button>
			</div>
		</motion.div>
	);
};

export default AddNote;
