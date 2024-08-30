import { IoHeart } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";

const Donate = () => {
	return (
		<Button
			asChild
			className="bg-primary hover:bg-secondary border border-white">
			<Link href="/donate" className="flex gap-2 justify-center items-center">
				<IoHeart className="fill-red-700 text-lg" />
				<span>Пожертвовать</span>
			</Link>
		</Button>
	);
};

export default Donate;
