import Image from "next/image";
import Girl from "/public/assets/child.jpg";
import Help from "/public/assets/help.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Aboutus = () => {
	return (
		<section className="max-w-[1080px] mx-auto text-white">
			<div className="flex flex-col md:flex-row">
				<div className="py-4 md:py-0 w-full md:w-1/2 border border-primary flex items-center justify-center px-4 flex-col gap-4">
					<h2 className="h2 text-center">Добро пожаловать на наш сайт</h2>
					<span className="text-sm text-center text-white/80">
						Мы предоставляем эмоциональную и практическую поддержку жителям
						Курской и Белгородской областей, пострадавшим от боевых действий. Мы
						предлагаем поддержку всей семье круглосуточно и без выходных,
						независимо от конкретной ситуации и на протяжении всего необходимого
						времени.
					</span>
					<Button asChild variant="secondary">
						<Link href="/form/basic" className="text-primary">
							Узнать больше
						</Link>
					</Button>
				</div>
				<div className="w-full md:w-1/2">
					<Image src={Girl} alt="" className="w-[540px]" />
				</div>
			</div>
			<div className="flex flex-col md:flex-row-reverse">
				<div className="py-4 md:py-0 w-full md:w-1/2 border border-primary flex items-center justify-center px-4 flex-col gap-4">
					<h2 className="h2 text-center">Коротко о нас</h2>
					<span className="text-sm text-center text-white/80">
						Фонд <strong>&laquo;Ангел&raquo;</strong> с 2013 года занимается
						поддержкой людей, оказавшихся в трудных жизненных обстоятельствах.
						Мы оказываем помощь тем, кто столкнулся с непреодолимыми
						трудностями, предоставляя необходимые ресурсы, заботу и внимание.
						Наша цель — не просто помочь, но и подарить надежду на лучшее
						будущее, обеспечивая поддержку в самых непростых ситуациях.
					</span>
					<Button asChild variant="secondary">
						<Link href="/about" className="text-primary">
							Узнать больше
						</Link>
					</Button>
				</div>
				<div className="w-full md:w-1/2">
					<Image src={Help} alt="" className="w-[540px]" />
				</div>
			</div>
		</section>
	);
};

export default Aboutus;
