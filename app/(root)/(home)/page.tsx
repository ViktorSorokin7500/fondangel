import Aboutus from "@/components/pages/home/Aboutus";
import OurTeam from "@/components/pages/home/OurTeam";
import Strategy from "@/components/pages/home/Strategy";
import Testimonial from "@/components/pages/home/Testimonial";

export default function Home() {
	return (
		<main className="flex flex-col w-full">
			<Testimonial />
			<Aboutus />
			<OurTeam />
			<Strategy />
		</main>
	);
}
