import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { EdgeStoreProvider } from "@/lib/edgestore";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono",
});

export function generateViewport() {
	return "width=device-width, initial-scale=1";
}

export const metadata = {
	title: {
		template: "%s | Фонд Ангела",
		default: "Фонд Ангела",
	},
	description:
		"Единовременная помощь жителям приграничья, пострадавшим от боевых действий.",
	openGraph: {
		title: "Фонд Ангела",
		description:
			"Единовременная помощь жителям приграничья, пострадавшим от боевых действий.",
		url: "angelfondation.com",
		type: "website",
		images: [
			{
				url: "https://cdn.pixabay.com/photo/2021/07/04/19/59/monument-6387465_1280.jpg",
				width: 800,
				height: 600,
				alt: "Image Alt",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Фонд Ангела",
		description:
			"Единовременная помощь жителям приграничья, пострадавшим от боевых действий.",
		image:
			"https://cdn.pixabay.com/photo/2021/07/04/19/59/monument-6387465_1280.jpg",
	},
	lang: "ru-Ru",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={`${jetbrainsMono.variable} flex flex-col min-h-screen`}>
				<EdgeStoreProvider>
					<Header />
					<div className="flex-1 flex justify-center items-center overflow-y-auto">
						{children}
					</div>
					<Footer />
				</EdgeStoreProvider>
			</body>
		</html>
	);
}
