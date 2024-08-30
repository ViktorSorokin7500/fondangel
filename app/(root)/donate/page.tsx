import React from "react";

export const metadata = {
	title: {
		default: "Пожертвования",
	},
	description: 'Пожертвования для фонда "Ангел"',
};

const page = () => {
	return (
		<section className="text-white space-y-4 p-4 w-80">
			<h1 className="h1 flex justify-center">Пожертвования</h1>
			<div className="flex flex-col justify-center text-center h3">
				<span>Благотворительный фонд «Ангел»,</span>
				<span>
					357500, Ставропольский край, г. Пятигорск, ул. Чкалова, д 10/1
				</span>
				<span>ИНН 2632809093, КПП 263201001,ОГРН 1132651021580</span>
				<span></span>
			</div>
			<h2 className="h2 text-center">Из России</h2>
			<div>
				<span>
					р/счет 40804810970100000900,Сев.-Кав.банк ОАО « Сбербанк России»
				</span>
			</div>
			<h2 className="h2 text-center">Из-за рубежа</h2>
			<div className="flex flex-col gap-1 items-center justify-center">
				<h3 className="h3">Криптовалюта</h3>
				<div className="flex flex-col md:flex-row items-center gap-2">
					<span className="text-white/80 font-semibold">Bitcoin</span>
					<span className="text-white/60">(BEP20)</span>
					<span>0x6112377907e063eb0cf31658780665d1eadabd26</span>
				</div>
				<div className="flex flex-col md:flex-row items-center gap-2">
					<span className="text-white/80 font-semibold">ETH</span>
					<span className="text-white/60">(BEP20)</span>
					<span>0x6112377907e063eb0cf31658780665d1eadabd26</span>
				</div>
				<div className="flex flex-col md:flex-row items-center gap-2">
					<span className="text-white/80 font-semibold">USDT</span>
					<span className="text-white/60">(BEP20)</span>
					<span>0x6112377907e063eb0cf31658780665d1eadabd26</span>
				</div>
			</div>
			<div className="flex flex-col gap-1 items-center justify-center">
				<h3 className="h3">S&#8364;PA</h3>
				<div className="flex flex-col items-center gap-0.5">
					<div className="flex gap-2">
						<span className="text-white/80">IBAN</span>
						<span>GB37CLJU00997186218774</span>
					</div>
					<div className="flex gap-2">
						<span className="text-white/80">BIC code</span>
						<span>CLJUGB21</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
