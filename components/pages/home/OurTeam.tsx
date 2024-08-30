import Image from "next/image";
import React from "react";
import Sasha from "/public/assets/sasha.jpg";
import Ljuba from "/public/assets/ljuba.jpg";

const info = [
	{
		img: Sasha,
		name: "Александр Шевченко",
		position: "Директор Благотворительного фонда «Ангел»",
	},
	{
		img: Ljuba,
		name: "Любовь Хенкина",
		position: "Учредитель Благотворительного фонда «Ангел»",
	},
];

const OurTeam = () => {
	return (
		<section className="flex flex-col bg-white/80 justify-center items-center text-primary space-y-2 py-4">
			<h2 className="h2">Наша команда</h2>
			<div className="flex flex-col md:flex-row gap-4 md:gap-16">
				{info.map((item, i) => (
					<div key={i} className="flex flex-col justify-center gap-4">
						<div className="mx-auto">
							<Image src={item.img} alt={item.name} className="w-52" />
						</div>
						<div className="text-center mx-auto w-48 border border-primary p-0.5 bg-white/60">
							<h4 className="h3">{item.name}</h4>
							<span>{item.position}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default OurTeam;
