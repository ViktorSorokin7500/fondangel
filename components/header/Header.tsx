import Burger from "../navbar/Burger";
import Navmenu from "../navbar/Navmenu";
import Donate from "../shared/Donate";

const Header = () => {
	return (
		<header className="bg-primary sticky top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-2">
			<Donate />
			<Navmenu />
			<Burger />
		</header>
	);
};

export default Header;
