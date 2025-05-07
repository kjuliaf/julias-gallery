"use client";

import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { NavigationDocument } from "../../prismicio-types";
import { useEffect, useState } from "react";

export default function Header() {
	const [navigation, setNavigation] = useState<NavigationDocument<string>>();
	const [hoveredNavigationId, setHoveredNavigationId] = useState<string | null>(null);
	const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);

	// Get navigation data
	useEffect(() => {
		async function fetchData() {
			try {
				const client = createClient();
				const response = await client.getByUID("navigation", "main-navigation");
				setNavigation(response);
			} catch (err) {
				console.error("Could not load images:", err);
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		if (showHamburgerMenu) {
			// Disable page scroll
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		} else {
			// Re-enable page scroll
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
		}
	}, [showHamburgerMenu]);

	// Header and navigation
	return (
		<header className="flex items-center justify-between border-b-1 font-bold">
			<Link href="/">
				<h1 className="w-64 p-5 text-2xl leading-5 md:w-80 md:p-6 md:text-3xl md:leading-6 lg:w-100 lg:p-8 lg:text-4xl lg:leading-7">
					PHOTO <span className="font-deco">G</span>ALLERY{" "}
					<span className="text-lg md:text-xl lg:text-2xl">
						BY <span className="font-deco">J</span>ULIA.
					</span>
				</h1>
			</Link>

			<nav>
				{/* Desktop */}
				<ul className="hidden w-50 grid-flow-col grid-cols-2 grid-rows-3 border-l-1 p-6 pr-8 pl-8 text-sm md:grid lg:w-56 lg:pr-9 lg:pl-9 lg:text-base">
					{navigation?.data.slices.map((slice) => (
						// Gets navigation items
						<li key={slice.id}>
							<PrismicNextLink
								field={slice.primary.link}
								onMouseOver={() => setHoveredNavigationId(slice.id)}
								onMouseOut={() => setHoveredNavigationId(null)}
								className={`block h-full w-full cursor-pointer pb-1.5 transition-opacity duration-150 ${hoveredNavigationId === slice.id ? "opacity-100" : "opacity-50"} ${hoveredNavigationId === null ? "opacity-100" : null}`}
							/>
						</li>
					))}
				</ul>

				{/* Mobile */}
				<div className="md:hidden">
					{/* Hamburger menu open icon */}
					<button
						className="flex cursor-pointer flex-col items-end gap-2 p-5"
						onClick={() => setShowHamburgerMenu(true)}
						aria-label="Open navigation menu"
						aria-expanded={showHamburgerMenu ? "true" : "false"}>
						<span className="block h-0.75 w-10 rounded bg-[#222222]"></span>
						<span className="block h-0.75 w-8 items-end rounded bg-[#222222]"></span>
					</button>

					{/* Hamburger menu */}
					<div
						className={`${showHamburgerMenu ? "" : "hidden"} absolute top-0 right-0 z-10 h-full w-full bg-[#F3F1E5]`}>
						<div className="relative flex flex-col items-end">
							{/* Hamburger menu close icon */}
							<button
								className="relative mt-2 flex cursor-pointer flex-col items-end p-5 pt-10"
								onClick={() => setShowHamburgerMenu(false)}
								aria-label="Close navigation menu"
								type="button">
								<div className="relative h-5 w-10">
									<span className="absolute block h-0.75 w-10 rotate-45 rounded bg-[#222222]"></span>
									<span className="absolute block h-0.75 w-10 -rotate-45 rounded bg-[#222222]"></span>
								</div>
							</button>
						</div>

						<ul
							className={`${showHamburgerMenu ? "" : "hidden"} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-xl`}>
							{navigation?.data.slices.map((slice) => (
								// Gets navigation items
								<li key={slice.id}>
									<PrismicNextLink
										field={slice.primary.link}
										className="mb-5 block h-full w-full cursor-pointer py-2 transition-opacity duration-50"
										onClick={() => setShowHamburgerMenu(false)}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
