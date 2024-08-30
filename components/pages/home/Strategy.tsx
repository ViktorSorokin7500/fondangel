import React from "react";

const info = [
	{
		id: "",
		title: "Наша стратегия",
		desc: "Мы оказываем помощь жителям Курской и Белгородской областей, обеспечивая финансовую поддержку наиболее нуждающимся семьям. Наша цель — расширить охват и увеличить объем помощи, чтобы охватить как можно больше людей.",
	},
	{
		id: "01",
		title: "ПОДДЕРЖКА БОЛЬШЕГО КОЛИЧЕСТВА СЕМЕЙ",
		desc: "Увеличим количество семей, получающих нашу поддержку, за счет оптимизации процессов распределения средств и повышения осведомленности среди нуждающихся.",
	},
	{
		id: "02",
		title: "РАСШИРЕНИЕ УСЛУГ",
		desc: "Разработаем и внедрим новые формы помощи, такие как программы поддержки для конкретных категорий граждан, и исследуем возможности расширения в другие регионы.",
	},
	{
		id: "03",
		title: "ПОВЫШЕНИЕ ПРОФИЛЯ ФОНДА",
		desc: "Увеличим узнаваемость нашего фонда, повышая общественную осведомленность о проблемах, с которыми сталкиваются жители Курской и Белгородской областей, через сотрудничество с другими организациями и активную информационную кампанию.",
	},
	{
		id: "04",
		title: "ПРОДОЛЖАЮЩИЙСЯ РОСТ",
		desc: "Будем продолжать развивать нашу деятельность, обеспечивая эффективное привлечение средств и поддержку на высоком уровне, чтобы удовлетворить растущий спрос на нашу помощь.",
	},
];

const Strategy = () => {
	return (
		<section className="py-6 px-8 space-y-8 xl:px-96">
			{info.map((item, i) => (
				<div
					key={i}
					className={`text-white ${
						i % 2 === 0 ? "justify-start" : "justify-end"
					} flex`}>
					<div className="max-w-xl space-y-2">
						{item.id && (
							<div
								className={`flex ${
									i % 2 === 0 ? "justify-end" : "justify-start"
								} font-semibold`}>
								<span className="bg-white text-3xl text-primary py-2 px-3 rounded-full">
									{item.id}
								</span>
							</div>
						)}
						<div className="flex gap-2">
							<div className="border border-white/80" />
							<div>
								<h3 className="h3">{item.title}</h3>
								<span>{item.desc}</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Strategy;
