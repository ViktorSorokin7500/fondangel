import Certificate from "@/components/pages/about/Certificate";
import Information from "@/components/pages/about/Information";
import Ustav from "@/components/pages/about/Ustav";

export const metadata = {
	title: {
		default: "О нас",
	},
	description: 'Узнайте больше про фонд "Ангел"',
};

const page = () => {
	return (
		<main className="flex flex-col items-center py-4 text-white">
			<Information />
			<Certificate />
			<Ustav />
		</main>
	);
};

export default page;
