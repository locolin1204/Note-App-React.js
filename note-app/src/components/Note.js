import React from "react";
import { MdDeleteForever } from "react-icons/md";
import {  motion } from "framer-motion/dist/framer-motion";
import {  } from "./NotesList";

const Note = ({ id, text, date, handleDeleteNote, index }) => {
	return (
		<motion.div
			variants={{
				hidden: index => ({
					opacity: 0,
					y: 10 * index,
				}),
				visible: index => ({
					opacity: 1,
					y: 0,
					transition: {
						delay: index * 0.1,
					},
				}),
				removed: {
					opacity: 0,
					transition: { duration: 2 },
				},
			}}
			initial="hidden"
			animate="visible"
			custom={index}
			// exit="removed"
			key={id}
		>
			<div className="note" >
				<span>{text}</span>
				<div className="note-footer">
					<small>{date}</small>
					<MdDeleteForever
						className="delete-icon"
						size="1.3em"
						onClick={() => handleDeleteNote(id, text, date)}
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Note;
