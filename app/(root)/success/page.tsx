export const metadata = {
	title: {
		default: "Успешная регистрация",
	},
	description:
		'Успешная регистрация для обработки информации для фонда "Ангел" о выдаче гуманитарной помощи',
};

const page = () => {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-secondary p-4">
			<h2 className="h2 font-bold text-center text-blue-600 mb-6">
				Спасибо за регистрацию
			</h2>
			<div className="bg-white p-6 rounded-lg shadow-md text-center max-w-lg">
				<p className="text-lg text-gray-700">
					Благодарим вас за регистрацию. Мы внимательно ознакомимся с вашей
					анкетой, и если вы удовлетворяете нашим требованиям, мы сообщим вам об
					этом на почту в течение двух дней.
				</p>
				<p className="mt-4 text-lg text-gray-700">
					После верификации вам и вашим детям будет производиться выплата из
					нашего фонда: <b>3000 рублей</b> на взрослого и <b>2000 рублей</b> на
					ребенка. Выплаты будут происходить в течение следующих{" "}
					<b>трех месяцев</b>.
				</p>
				<p className="mt-4 text-lg text-gray-700">
					Мы сделаем все возможное, чтобы поддержать вас.
				</p>
			</div>
		</main>
	);
};

export default page;
