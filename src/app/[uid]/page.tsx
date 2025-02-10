import { Metadata } from "next";
import { notFound } from "next/navigation";
import { isFilled, asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import PhotoGrid from "@/components/PhotoGrid";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
	const { uid } = await params;
	const client = createClient();
	const page = await client.getByUID("category_page", uid).catch(() => notFound());

	// <SliceZone> renders the page's slices
	// Photo grid based on the page's category
	return (
		<div>
			<SliceZone slices={page.data.slices} components={components} />
			<PhotoGrid category={page.data.category} />
		</div>
	);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
	const { uid } = await params;
	const client = createClient();
	const page = await client.getByUID("category_page", uid).catch(() => notFound());

	return {
		title: page.data.meta_title,
		description: page.data.meta_description,
		openGraph: {
			title: isFilled.keyText(page.data.meta_title) ? page.data.meta_title : undefined,
			description: isFilled.keyText(page.data.meta_description)
				? page.data.meta_description
				: undefined,
			images: isFilled.image(page.data.meta_image)
				? [asImageSrc(page.data.meta_image)]
				: undefined
		}
	};
}

export async function generateStaticParams() {
	const client = createClient();
	const pages = await client.getAllByType("category_page");

	return pages.map((page) => {
		return { uid: page.uid };
	});
}
