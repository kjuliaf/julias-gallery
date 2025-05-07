"use client";

import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useRef, useState } from "react";
import { PhotoGridDocument, PhotoSlice } from "../../prismicio-types";
import useMasonry from "@/utils/useMasonry";
import { motion, AnimatePresence } from "motion/react";
import Loading from "./Loading";

export default function PhotoGrid(props: { category: string | null }) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const [photoGrid, setPhotoGrid] = useState<PhotoGridDocument<string>>();
	const masonryContainer = useMasonry();
	const [hoveredImageId, setHoveredImageId] = useState<string | null>(null);
	const [clickedImage, setClickedImage] = useState<PhotoSlice | null>(null);
	const [showAll, setShowAll] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	const filteredPhotoGrid = photoGrid?.data.slices
		.filter((slice) => props.category === null || slice.primary.category === props.category)
		.filter((_, index) => showAll || index < 9);

	const numberOfImages = filteredPhotoGrid?.length ?? 0;

	// Get photo grid data
	useEffect(() => {
		async function fetchData() {
			try {
				const client = createClient();
				const response = await client.getByUID("photo_grid", "photo_grid");
				setPhotoGrid(response);
			} catch (err) {
				console.error("Could not load images:", err);
			} finally {
				setTimeout(() => {
					setLoading(false);
				}, 800);
			}
		}
		fetchData();
	}, []);

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

	const closeDialog = () => {
		dialogRef.current?.close();
		setClickedImage(null);
		document.body.style.overflow = "auto";
		document.documentElement.style.overflow = "auto";
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
					<div
						ref={masonryContainer}
						className="grid grid-cols-2 items-start gap-5 sm:grid-cols-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-7 xl:grid-cols-5">
						{filteredPhotoGrid?.map((slice, index) => (
							<div key={slice.id} className="pt-5 md:pt-7 lg:pt-9">
								<motion.div
									key={slice.id}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{
										opacity: loading ? 0 : 1,
										scale: loading ? 0.8 : 1
									}}
									whileHover={{ scale: 1.05 }}
									transition={{
										duration: 1,
										ease: "easeInOut",
										scale: { type: "spring" },
										delay: index * 0.2
									}}
									className="will-change-transform">
										
									{/* Image "index / location" */}
									<p className="text-xs font-bold uppercase">
										{index < 10 ? `0${index}` : index} / {slice.primary.location?.toString()}
									</p>

									{/* Display image */}
									<PrismicNextImage
										field={slice.primary.photo}
										role="button"
										tabIndex={0}
										onMouseOver={() => setHoveredImageId(slice.id)}
										onMouseOut={() => setHoveredImageId(null)}
										onMouseDown={() => setClickedImage(slice)}
										onKeyDown={(e) => {
											if (e.key === "Enter" || e.key === " ") {
												e.preventDefault();
												setClickedImage(slice);
											}
										}}
										className={`cursor-pointer transition-opacity duration-150 ${hoveredImageId === slice.id ? "opacity-70" : "opacity-100"} bg-[#CFCDC3]`}
									/>
								</motion.div>
							</div>
						))}
					</div>
					{!showAll && numberOfImages > 8 ? (
						/* Show all images button if not all are displayed */
						<button className="mt-4 cursor-pointer font-bold underline" onClick={() => setShowAll(true)}>
							Show all
						</button>
					) : (
						""
					)}
					{/* Dialog for showing more image information */}
					{clickedImage !== null ? (
						<dialog
							ref={dialogRef}
							className="mx-auto my-auto rounded-lg backdrop:bg-[#222222] backdrop:opacity-70"
							onClick={closeDialog}>
							<div
								className="relative flex max-w-xl flex-col bg-white p-6 shadow-lg"
								onClick={(e) => e.stopPropagation()}>
								{/* Close button */}
								<div className="self-end">
									<button onClick={closeDialog} className="relative h-10 w-10 cursor-pointer">
										<span className="absolute top-1/2 left-1/2 block h-0.75 w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded bg-[#222222]"></span>
										<span className="absolute top-1/2 left-1/2 block h-0.75 w-10 -translate-x-1/2 -translate-y-1/2 rotate-135 rounded bg-[#222222]"></span>
									</button>
								</div>
								{/* Display image */}
								<PrismicNextImage key={clickedImage.id} field={clickedImage.primary.photo} />
							</div>
						</dialog>
					) : (
						""
					)}
				</div>
			</AnimatePresence>
		</section>
	);
}
