import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
	return (
		<section className="p-4 text-white flex flex-col gap-4">
			<h1 className="h1">Спасибо за регистрацию</h1>
			<span className="text-white/80 mx-auto">
				Во избежание мошеннических действий, просим вас пройти верификацию.
				После подтверждения верификация вам будет назначена помощь.
			</span>
			<Button
				asChild
				className="w-fit mx-auto border border-white"
				variant="ghost">
				<Link href="/form/extended">Верификация</Link>
			</Button>
		</section>
	);
};

export default page;
