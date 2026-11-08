import { Link, useLocation } from "react-router-dom";
import { NavLinks } from "../../config/navigation";

const Navbar = () => {
	const location = useLocation();

	return (
		<>
			{/* Top Bar: Brand logo & Desktop Navigation */}
			<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 border-b border-gray-100 dark:border-gray-700 backdrop-blur-lg">
				<div className="container mx-auto px-6 py-4 flex items-center justify-between">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-3">
						<img
							src="/images/unitylogo.png"
							alt="Unity Logo"
							className="w-10 h-10 rounded-full"
						/>
						<span className="text-md font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Unity HomeCare
						</span>
					</Link>

					{/* Desktop Menu with Icons */}
					<div className="hidden md:flex items-center space-x-6">
						{NavLinks.map(({ path, name, icon: Icon }) => {
							const isActive = location.pathname === path;
							return (
								<Link
									key={path}
									to={path}
									className={`flex items-center space-x-2 font-bold transition-colors py-1 px-3 rounded-lg ${
										isActive
											? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800"
											: "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
									}`}
								>
									<Icon className="w-4 h-4" />
									<span>{name}</span>
								</Link>
							);
						})}
					</div>
				</div>
			</nav>

			{/* Mobile Bottom Navigation Bar */}
			<nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800 backdrop-blur-lg px-2 py-2">
				<div className="flex justify-around items-center">
					{NavLinks.map(({ path, name, icon: Icon }) => {
						const isActive = location.pathname === path;
						return (
							<Link
								key={path}
								to={path}
								className={`flex flex-col items-center justify-center space-y-1 py-1 px-2 rounded-lg text-xs font-semibold transition-colors ${
									isActive
										? "text-blue-600 dark:text-blue-400"
										: "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
								}`}
							>
								<Icon className="w-5 h-5" />
								<span className="text-[10px]">{name}</span>
							</Link>
						);
					})}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
