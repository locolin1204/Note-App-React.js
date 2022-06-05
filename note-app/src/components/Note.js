import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { enterAnimation } from "./NotesList";

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<motion.div
			className="note"
			{...enterAnimation}
		>
			<span>{text}</span>
			<div className="note-footer">
				<small>{date}</small>
				<MdDeleteForever
					className="delete-icon"
					size="1.3em"
					onClick={() => handleDeleteNote(id)}
				/>
			</div>
		</motion.div>
	);
};

export default Note;
