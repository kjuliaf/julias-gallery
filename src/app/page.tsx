import { type Metadata } from "next";

import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import PhotoGrid from "@/components/PhotoGrid/PhotoGrid";

export default async function Home() {
	const client = createClient();
	const home = await client.getByUID("page", "home");

	// <SliceZone> renders the page's slices
	// Photo grid based for home page, all categories
	return (
		<div>
			<SliceZone slices={home.data.slices} components={components} />
			<PhotoGrid category={null} />
		</div>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient();
	const home = await client.getByUID("page", "home");

	return {
		title: asText(home.data.title),
		description: home.data.meta_description,
		openGraph: {
			title: home.data.meta_title ?? undefined,
			images: [{ url: home.data.meta_image.url ?? "" }]
		}
	};
}
