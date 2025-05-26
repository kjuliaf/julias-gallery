import { PrismicNextImage } from "@prismicio/next";
import { PhotoSlice } from "../../../prismicio-types";

interface PhotoModal {
    dialogRef: React.RefObject<HTMLDialogElement | null>;
    clickedImage: PhotoSlice;
    setClickedImage: (slice: PhotoSlice | null) => void;
}

export default function PhotoModal({ dialogRef, clickedImage, setClickedImage }: PhotoModal) {
	const closeDialog = () => {
		dialogRef.current?.close();
		setClickedImage(null);
		document.body.style.overflow = "auto";
		document.documentElement.style.overflow = "auto";
	};

	return (
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
	);
}
