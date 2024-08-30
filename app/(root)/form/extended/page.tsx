import { MainForm } from "@/components/form/MainForm";

export const metadata = {
	title: {
		default: "Заявка на помощь",
	},
	description: 'Заявка на помощь от фонда "Ангел"',
};

const page = () => {
	return (
		<main className="text-white py-4">
			<h1 className="h1 text-center text-white">Верификация:</h1>
			<span className="text-sm text-white/80 p-2 sm:p-4 flex justify-center">
				Пожалуйста загрузите следующие данные
			</span>
			<MainForm />
		</main>
	);
};

export default page;
