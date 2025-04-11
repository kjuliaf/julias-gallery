"use client";

import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useRef, useState } from "react";
import { PhotoGridDocument, PhotoSlice } from "../../prismicio-types";
import useMasonry from "@/utils/useMasonry";

export default function PhotoGrid(props: { category: string | null }) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const [photoGrid, setPhotoGrid] = useState<PhotoGridDocument<string>>();
	const masonryContainer = useMasonry();
	const [hoveredImageId, setHoveredImageId] = useState<string | null>(null);
	const [clickedImage, setClickedImage] = useState<PhotoSlice | null>(null);
	let categoryIndex = 0;
	const [showAll, setShowAll] = useState<boolean>(false);

	// Get photo grid data
	useEffect(() => {
		async function fetchData() {
			try {
				const client = createClient();
				const response = await client.getByUID("photo_grid", "photo_grid");
				setPhotoGrid(response);
			} catch (err) {
				console.error("Could not load images:", err);
			}
		}
		fetchData();
	}, []);

	const openDialog = () => {
		dialogRef.current?.showModal();
		document.body.style.overflow = "hidden";
		document.documentElement.style.overflow = "hidden";
	};

	const closeDialog = () => {
		dialogRef.current?.close();
		document.body.style.overflow = "auto";
		document.documentElement.style.overflow = "auto";
	};

	// Photo grid with masonry layout
	return (
		<section className="lg-pt-5 flex flex-col border-b-1 p-5 pt-3 pb-10 md:p-6 md:pt-4 md:pb-12 lg:p-7 lg:pt-5 lg:pb-14">
			<div
				ref={masonryContainer}
				className="grid grid-cols-2 items-start gap-5 sm:grid-cols-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-7 xl:grid-cols-5"
			>
				{photoGrid?.data.slices.map((slice, index) =>
					// Gets the image unless category was specified, otherwise only
					// gets images from the specified category
					props.category === null ? (
						!showAll && index > 8 ? (
							""
						) : (
							<div key={slice.id} className="md:pt7 pt-5 lg:pt-9">
								{/* Image "index / location" information */}
								{index < 10 ? (
									<p className="text-xs font-bold uppercase">
										0{index} / {slice.primary.location?.toString()}
									</p>
								) : (
									<p className="text-xs font-bold uppercase">
										{index} / {slice.primary.location?.toString()}
									</p>
								)}

								{/* Display image */}
								<PrismicNextImage
									field={slice.primary.photo}
									onMouseOver={() => setHoveredImageId(slice.id)}
									onMouseOut={() => setHoveredImageId(null)}
									onMouseDown={() => {
										setClickedImage(slice);
										openDialog();
									}}
									className={`cursor-pointer transition-opacity duration-50 ${hoveredImageId === slice.id ? "opacity-70" : "opacity-100"} bg-[#CFCDC3]`}
								/>
							</div>
						)
					) : props.category === slice.primary.category ? (
						!showAll && categoryIndex > 8 ? (
							""
						) : (
							<div key={slice.id} className="pt-5 md:pt-7 lg:pt-9">
								{/* Image "index / location" information */}
								{categoryIndex < 10 ? (
									<p className="text-xs font-bold uppercase">
										0{categoryIndex++} / {slice.primary.location?.toString()}
									</p>
								) : (
									<p className="text-xs font-bold uppercase">
										{categoryIndex++} / {slice.primary.location?.toString()}
									</p>
								)}

								{/* Display image */}
								<PrismicNextImage
									field={slice.primary.photo}
									onMouseOver={() => setHoveredImageId(slice.id)}
									onMouseOut={() => setHoveredImageId(null)}
									onMouseDown={() => {
										setClickedImage(slice);
										openDialog();
									}}
									className={`cursor-pointer transition-opacity duration-50 ${hoveredImageId === slice.id ? "opacity-70" : "opacity-100"} bg-[#CFCDC3]`}
								/>
							</div>
						)
					) : null
				)}
			</div>
			{!showAll ? (
				props.category === null || (props.category !== null && categoryIndex > 8) ? (
					/* Show all images button if not all are displayed */
					<button
						className="mt-4 cursor-pointer font-bold underline"
						onClick={() => setShowAll(true)}
					>
						Show all
					</button>
				) : (
					""
				)
			) : (
				""
			)}
			{/* Modal for showing more image information */}
			{clickedImage !== null ? (
				<dialog
					ref={dialogRef}
					className="mx-auto my-auto max-w-xl rounded-lg bg-white p-6 shadow-lg backdrop:bg-[#222222] backdrop:opacity-70"
				>
					<button onClick={closeDialog} className="cursor-pointer p-5">
						<span className="absolute block h-0.75 w-10 rotate-45 bg-[#222222]"></span>
						<span className="absolute block h-0.75 w-10 rotate-135 bg-[#222222]"></span>
					</button>

					<PrismicNextImage key={clickedImage.id} field={clickedImage.primary.photo} />
				</dialog>
			) : null}
		</section>
	);
}
