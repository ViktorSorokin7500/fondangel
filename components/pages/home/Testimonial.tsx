import Image from "next/image";
import mainimg from "/public/assets/main-img.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Testimonial = () => {
	return (
		<section className="relative">
			<Image
				src={mainimg}
				alt="Помощь ближнему"
				className="w-full object-cover min-h-96"
			/>
			<div className="absolute z-10 inset-0 flex flex-col gap-4 items-center justify-center text-white px-4">
				<div className="border border-white p-4 text-center flex flex-col gap-2">
					<h1 className="uppercase h2 pb-4">Быть полезным для других</h1>
					<span className="h3">
						Единовременная помощь жителям приграничья, пострадавшим от боевых
						действий
					</span>
					<span>
						<strong>3000 рублей</strong> на взрослого
					</span>
					<span>
						<strong>2000 рублей</strong> на ребенка
					</span>
				</div>
				<Button variant="destructive" asChild>
					<Link href="/form/basic">Оформить заявку</Link>
				</Button>
			</div>
		</section>
	);
};

export default Testimonial;
