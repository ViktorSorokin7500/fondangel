import { BasicForm } from "@/components/form/BasicForm";

export const metadata = {
	title: {
		default: "Заявка на помощь",
	},
	description: 'Заявка на помощь от фонда "Ангел"',
};

const page = () => {
	return (
		<main className="text-white py-4">
			<h1 className="h1 text-center text-white pb-2 sm:pb-6">
				Заявка на помощь:
			</h1>
			<BasicForm />
		</main>
	);
};

export default page;
