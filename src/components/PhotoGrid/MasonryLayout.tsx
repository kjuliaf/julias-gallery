import useMasonry from "@/utils/useMasonry";
import { PhotoSlice } from "../../../prismicio-types";
import { motion } from "motion/react";
import { PrismicNextImage } from "@prismicio/next";

interface MasonryLayoutProps {
	filteredPhotoGrid: PhotoSlice[] | null;
	loading: boolean;
	setClickedImage: (slice: PhotoSlice) => void;
	showAll: boolean;
	setShowAll: (showAll: boolean) => void;
	numberOfImages: number;
	hoveredImageId: string | null;
	setHoveredImageId: (id: string | null) => void;
}

export default function MasonryLayout({
	filteredPhotoGrid,
	loading,
	setClickedImage,
	showAll,
	setShowAll,
	numberOfImages,
	hoveredImageId,
	setHoveredImageId
}: MasonryLayoutProps) {
	// Component implementation

	const masonryContainer = useMasonry();

	return (
		<div className="flex flex-col">
			<div
				ref={masonryContainer}
				className="grid grid-cols-2 items-start gap-5 sm:grid-cols-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-7 xl:grid-cols-5">
				{filteredPhotoGrid?.map((slice, index) => (
					<div key={slice.id} className="pt-5 md:pt-7 lg:pt-9">
						<motion.div
							key={slice.id}
							initial={{ opacity: 0 }}
							animate={{
								opacity: loading ? 0 : 1
							}}
							whileHover={{ scale: 1.04 }}
							transition={{
								duration: 0.8,
								ease: "easeInOut",
								scale: { type: "spring", duration: 0.6 }
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
		</div>
	);
}
