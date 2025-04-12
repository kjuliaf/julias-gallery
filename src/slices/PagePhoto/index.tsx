import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import arrow from "./resources/arrow.svg";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `PagePhoto`.
 */
export type PagePhotoProps = SliceComponentProps<Content.PagePhotoSlice>;

/**
 * Component for "PagePhoto" Slices.
 */
const PagePhoto: FC<PagePhotoProps> = ({ slice }) => {
	return (
		<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div className="flex flex-col items-center justify-end border-b-1 p-10 sm:flex-row sm:justify-around md:p-13 md:px-15 lg:p-17 lg:px-22">
				{/* Category images */}
				<div className="grid grid-cols-2 grid-rows-2 place-self-start sm:mb-[-50]">
					<PrismicNextImage
						field={slice.primary.image1}
						className="aspect-square w-30 object-cover md:w-40 lg:w-55"
					/>
					<PrismicNextImage
						field={slice.primary.image2}
						className="col-start-2 row-start-2 mt-[-50] grid aspect-square w-30 object-cover md:w-40 lg:w-55"
					/>
				</div>

				{/* Category heading and description */}
				<div className="flex flex-col items-end gap-8 place-self-end sm:place-self-center md:gap-10 lg:gap-12">
					<div className="text-right text-3xl font-bold uppercase md:text-4xl lg:text-5xl">
						<PrismicRichText field={slice.primary.category} />
					</div>
					<div className="w-54 text-right text-sm md:w-62 md:text-base">
						<PrismicRichText field={slice.primary.description} />
					</div>
					<Image src={arrow} alt="Arrow" className="w-7 md:w-9 lg:w-10" />
				</div>
			</div>
		</section>
	);
};

export default PagePhoto;
