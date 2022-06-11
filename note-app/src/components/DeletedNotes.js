import React from "react";
import { GoX } from "react-icons/go";
import { MdSettingsBackupRestore } from "react-icons/md";
import { motion } from "framer-motion/dist/framer-motion";
const DeletedNotes = ({
	id,
	text,
	date,
	deleteNote,
	handleRestoreNote,
	foreverDelete,
	index
}) => {
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
					transition: { duration: 0.3 },
				},
			}}
			initial="hidden"
			animate="visible"
			custom={index}
			exit="removed"
			key={id}
		>
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
		</motion.div>
	);
};

export default DeletedNotes;
