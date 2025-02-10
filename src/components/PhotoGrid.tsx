"use client";

import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";
import { PhotoGridDocument } from "../../prismicio-types";
import useMasonry from "@/utils/useMasonry";

export default function PhotoGrid(props: { category: string | null }) {
	const [photoGrid, setPhotoGrid] = useState<PhotoGridDocument<string>>();
	const masonryContainer = useMasonry();

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

	// Photo grid with masonry layout
	return (
		<section>
			<div
				ref={masonryContainer}
				className="mt-14 grid grid-cols-2 items-start gap-4 sm:grid-cols-3 md:grid-cols-3 lg:mt-20 lg:grid-cols-4"
			>
				{photoGrid?.data.slices.map((slice) =>
					// Gets the image unless category was specified, otherwise only
					// gets images from the specified category
					props.category === null ? (
						<PrismicNextImage key={slice.id} field={slice.primary.photo} />
					) : props.category === slice.primary.category ? (
						<PrismicNextImage key={slice.id} field={slice.primary.photo} />
					) : null
				)}
			</div>
		</section>
	);
}
