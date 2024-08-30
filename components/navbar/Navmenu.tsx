import Link from "next/link";

const menu = [
	{ id: 1, title: "Главная", link: "/" },
	{ id: 2, title: "О нас", link: "/about" },
];

const Navmenu = () => {
	return (
		<nav className="flex text-white gap-4">
			{menu.map((item) => (
				<Link
					key={item.id}
					href={item.link}
					className="font-semibold hover:underline">
					{item.title}
				</Link>
			))}
		</nav>
	);
};

export default Navmenu;
