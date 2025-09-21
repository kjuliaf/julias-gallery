import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Mulish, Parisienne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mulish = Mulish({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mulish"
});

const parisienne = Parisienne({
	weight: "400",
	display: "swap",
	subsets: ["latin"],
	variable: "--font-parisienne"
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${mulish.variable} ${parisienne.variable}`}>
			<body className="bg-[#F3F1E5] text-[#222222]">
				<Header />
				<main>{children}</main>
				<Footer />
				<Analytics />
			</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	);
}
