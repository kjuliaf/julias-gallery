import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Photo`.
 */
export type PhotoProps = SliceComponentProps<Content.PhotoSlice>;

/**
 * Component for "Photo" Slices.
 */
const Photo: FC<PhotoProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for photo (variation: {slice.variation}) Slices
    </section>
  );
};

export default Photo;
