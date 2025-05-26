"use client";

import { useEffect, useRef, useState } from "react";
import { PhotoSlice } from "../../../prismicio-types";
import { motion, AnimatePresence } from "motion/react";
import Loading from "./Loading";
import { usePhotoGridStore } from "@/utils/usePhotoGridStore";
import MasonryLayout from "./MasonryLayout";
import PhotoModal from "./PhotoModal";

// TODO : Refactor PhotoModal in to another component
// TODO : Add animation to the modal
// TODO : Add other data and layout to the modal

// TODO : Refactor MasonryLayout in to another component

export default function PhotoGrid(props: { category: string | null }) {
	const { photoGrid, loading, fetchPhotoGrid } = usePhotoGridStore();
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [hoveredImageId, setHoveredImageId] = useState<string | null>(null);
	const [clickedImage, setClickedImage] = useState<PhotoSlice | null>(null);
	const [showAll, setShowAll] = useState<boolean>(false);
	const [filteredPhotoGrid, setFilteredPhotoGrid] = useState<PhotoSlice[] | null>(null);
	const numberOfImages = filteredPhotoGrid?.length ?? 0;

	// Get photo grid data
	useEffect(() => {
		if (!photoGrid) {
			setTimeout(() => {
				fetchPhotoGrid();
			}, 800);
		}
	}, [photoGrid, fetchPhotoGrid]);

	// Filter photo grid
	useEffect(() => {
		if (photoGrid) {
			const filtered = photoGrid.data.slices
				.filter((slice) => props.category === null || slice.primary.category === props.category)
				.filter((_, index) => showAll || index < 9);

			setFilteredPhotoGrid(filtered);
		}
	}, [photoGrid, props.category, showAll]);

	useEffect(() => {
		if (loading) {
			// Disable page scroll
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		} else {
			// Re-enable page scroll
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
		}
	}, [loading]);

	// Open dialog when clicking on an image
	useEffect(() => {
		if (clickedImage !== null) {
			openDialog();
		}
	}, [clickedImage]);

	const openDialog = () => {
		dialogRef.current?.showModal();
		document.body.style.overflow = "hidden";
		document.documentElement.style.overflow = "hidden";
	};

	// Photo grid with masonry layout
	return (
		<section>
			<AnimatePresence>
				{loading && (
					<motion.div
						key="loading"
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}>
						<Loading />
					</motion.div>
				)}
				<div className="flex flex-col border-b-1 p-5 pt-3 pb-10 md:p-6 md:pt-4 md:pb-12 lg:p-7 lg:pt-5 lg:pb-14">
					<MasonryLayout
						filteredPhotoGrid={filteredPhotoGrid}
						loading={loading}
						setClickedImage={setClickedImage}
						showAll={showAll}
						setShowAll={setShowAll}
						numberOfImages={numberOfImages}
						hoveredImageId={hoveredImageId}
						setHoveredImageId={setHoveredImageId}
					/>

					{/* Dialog for showing more image information */}
					{clickedImage !== null ? (
						<PhotoModal
							dialogRef={dialogRef}
							clickedImage={clickedImage}
							setClickedImage={setClickedImage}
						/>
					) : (
						""
					)}
				</div>
			</AnimatePresence>
		</section>
	);
}
