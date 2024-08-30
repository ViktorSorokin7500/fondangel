import Link from "next/link";
import Donate from "../shared/Donate";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaOdnoklassniki, FaYandex, FaTelegramPlane } from "react-icons/fa";
import { Button } from "../ui/button";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-primary p-4 flex flex-col gap-2 text-white">
			<div className="flex flex-col md:flex-row justify-around space-y-2">
				<div className="flex items-center gap-4">
					<div className="hidden md:block border border-white h-32 w-0.5" />
					<div className="flex flex-col items-center m-auto">
						<h3 className="h3">Благотворительный фонд «Ангел»</h3>
						<span>357500</span>
						<span>Ставропольский край</span>
						<span>г. Пятигорск</span>
						<span>ул. Чкалова, д 10/1</span>
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<div className="hidden md:block border border-white h-32 w-0.5" />
					<div className="flex flex-col gap-4 justify-center items-center m-auto">
						<h3 className="h3">Присоединяйся к своим</h3>
						<Donate />
					</div>
				</div>
				<div className="flex gap-4">
					<div className="hidden md:block border border-white h-32 w-0.5" />
					<div className="flex flex-col items-center m-auto gap-4 justify-center">
						<h3 className="h3 text-center">Подпишитесь на нас:</h3>
						<div className="flex flex-wrap gap-2">
							<Button className="hover:bg-blue-400">
								<SlSocialVkontakte />
							</Button>
							<Button className="hover:bg-orange-400">
								<FaOdnoklassniki />
							</Button>
							<Button className="hover:bg-red-400">
								<FaYandex />
							</Button>
							<Button className="hover:bg-blue-600">
								<FaTelegramPlane />
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center flex flex-col-reverse md:flex-row justify-center gap-1 md:gap-4">
				<span>{currentYear}</span>
				<span className="hidden md:block">|</span>
				<Link href="/policy" className="hover:underline">
					Политика конфиденциальности
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
