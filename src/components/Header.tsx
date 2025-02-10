import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {
	const client = createClient();
	const navigation = await client.getByUID("navigation", "main-navigation");
	
	// Header and navigation
	return (
		<header className="flex items-center gap-24 font-bold">
			<Link href="/">
				<h1 className="w-36 text-5xl/14 lg:w-54 lg:text-6xl/16">Julias Gallery</h1>
			</Link>

			<nav>
				<ul className="grid w-34 grid-flow-col grid-cols-2 grid-rows-3 gap-1.5 text-sm lg:w-38 lg:text-base">
					{navigation.data.slices.map((slice) => (
						// Gets navigation items
						<li key={slice.id}>
							<PrismicNextLink field={slice.primary.link} />
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
