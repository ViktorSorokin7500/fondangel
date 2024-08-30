"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
// Modal.setAppElement("#__next");
const ModalImage = ({ img }: { img: any }) => {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	return (
		<section>
			<Image
				src={img}
				alt="Description"
				width={225}
				height={120}
				onClick={openModal}
				style={{ cursor: "pointer" }}
			/>
			<Modal
				isOpen={isOpen}
				onRequestClose={closeModal}
				style={{
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						transform: "translate(-50%, -50%)",
						padding: 0,
						border: "none",
						background: "transparent",
					},
					overlay: {
						backgroundColor: "rgba(0, 0, 0, 0.75)",
					},
				}}>
				<Image
					src={img}
					alt="Description"
					width={600}
					height={400}
					onClick={closeModal}
					style={{ cursor: "pointer" }}
				/>
			</Modal>
		</section>
	);
};

export default ModalImage;
