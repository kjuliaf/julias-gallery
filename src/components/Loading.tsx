import { motion, Variants } from "motion/react";

export default function Loading() {
	const dotVariants: Variants = {
		jump: {
			y: -30,
			transition: {
				duration: 0.8,
				repeat: Infinity,
				repeatType: "mirror",
				ease: "easeInOut"
			}
		}
	};

	return (
		<div className="absolute top-0 right-0 z-100 flex h-dvh w-full flex-col items-center justify-center gap-12 bg-[#F3F1E5]">
			Loading ...
			<motion.div className="flex" animate="jump" transition={{ staggerChildren: -0.2, staggerDirection: -1 }}>
				<motion.svg
					variants={dotVariants}
					viewBox="0 0 400 400"
					fill="none"
					width="50px"
					height="50px"
					xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<path
							d="M105.676 129.417C187.216 117.927 282.27 124.988 292.467 129.417C302.664 133.846 309.045 258.962 301.172 265.501C293.299 272.041 109.975 293.21 105.676 282.356C101.376 271.502 91.3627 172.34 96.3695 157.049"
							stroke="#222222"
							strokeOpacity="0.9"
							strokeWidth="16"
							strokeLinecap="round"
							strokeLinejoin="round"></path>{" "}
						<path
							d="M168.732 172.972C206.647 119.637 275.799 205.514 227.206 240.666C189.446 267.983 145.115 225.405 162.843 188.357"
							stroke="#222222"
							strokeOpacity="0.9"
							strokeWidth="16"
							strokeLinecap="round"
							strokeLinejoin="round"></path>{" "}
						<path
							d="M189.743 191.456C204.988 176.165 222.531 205.237 204.07 213.465C189.621 219.903 180.861 203.74 189.743 194.242"
							stroke="#222222"
							strokeOpacity="0.9"
							strokeWidth="16"
							strokeLinecap="round"
							strokeLinejoin="round"></path>{" "}
						<path
							d="M253.031 116.608C256.765 114.464 263.856 114.464 274.305 116.608"
							stroke="#222222"
							strokeOpacity="0.9"
							strokeWidth="16"
							strokeLinecap="round"
							strokeLinejoin="round"></path>{" "}
						<path
							d="M259.107 158.709C259.107 158.709 262.134 157.351 266.705 158.709"
							stroke="#222222"
							strokeOpacity="0.9"
							strokeWidth="16"
							strokeLinecap="round"
							strokeLinejoin="round"></path>{" "}
					</g>
				</motion.svg>

				<motion.svg
					variants={dotVariants}
					viewBox="0 0 400 400"
					fill="none"
					width="50px"
					height="50px"
					xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<path
							d="M97.5196 331.901C112.889 287.72 128.979 240.626 145.791 190.617C162.602 140.609 177.204 96.4029 189.596 58C219.453 145.36 235.625 197.306 238.112 213.836C241.842 238.631 275.21 335.628 266.731 342.576C258.253 349.523 182.583 269.188 163.655 245.295C144.728 221.401 73.981 144.715 80.4117 144.715C83.8675 144.715 150.196 138.456 210.882 139.304C263.124 140.035 310.446 147.098 318.482 155.546C332.706 170.5 198.729 243.235 183.445 255.322C168.161 267.408 97.4268 322.406 85.7124 331.901"
							stroke="#222222"
							strokeOpacity="0.9"
							strokeWidth="16"
							strokeLinecap="round"
							strokeLinejoin="round"></path>{" "}
					</g>
				</motion.svg>

				<motion.svg
					variants={dotVariants}
					width="50px"
					height="50px"
					viewBox="0 0 400 400"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					stroke="#000000">
					<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
					<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						{" "}
						<path
							d="M117.315 215.369C154.176 176.229 180.944 121.211 184.461 90C198.464 91.0419 209.685 91.5629 218.122 91.5629C226.208 91.5629 238.601 91.0419 255.301 90C246.535 110.522 239.87 127.016 235.304 139.48C230.739 151.945 225.011 169.286 218.122 191.504C239.032 190.107 254.714 189.408 265.169 189.408C270.687 189.408 278.964 190.107 290 191.504C272.539 202.112 254.307 216.497 235.304 234.658C216.302 252.819 187.383 284.266 148.55 329L172.976 252.043L180.944 232.497C177.011 231.254 168.088 230.463 154.176 230.122C140.264 229.782 125.872 230.015 111 230.821"
							stroke="#222222"
							strokeOpacity="0.9"
							strokeWidth="16"
							strokeLinecap="round"
							strokeLinejoin="round"></path>{" "}
					</g>
				</motion.svg>
			</motion.div>
		</div>
	);
}
