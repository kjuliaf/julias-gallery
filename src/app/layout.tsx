import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter"
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={inter.variable}>
			<body className="m-5 bg-[#191919] text-white lg:m-7">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
			<PrismicPreview repositoryName={repositoryName} />
		</html>
	);
}
