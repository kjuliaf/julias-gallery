"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

type CustomCursorProps = {
	isHovered: boolean;
};

export default function CustomCursor({ isHovered }: CustomCursorProps) {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const move = (e: MouseEvent) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", move);
		return () => window.removeEventListener("mousemove", move);
	}, []);

	return (
		<div>
			{/* Only show custom cursor when isHovered is true */}
			{isHovered && (
				<motion.div
					className="pointer-events-none fixed z-[9999] flex h-[40px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(34,34,34,0.4)] text-white backdrop-blur"
					style={{ left: position.x, top: position.y }}
					initial={{ opacity: 0, scale: 0 }}
					exit={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, type: "spring" }}>
					<p className="font-bold">View</p>
				</motion.div>
			)}
		</div>
	);
}
