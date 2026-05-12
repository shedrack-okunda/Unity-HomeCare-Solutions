import { Moon, Sun, Menu, X } from "lucide-react";

interface NavbarProps {
	darkMode: boolean;
	toggleDarkMode: () => void;
	isMenuOpen: boolean;
	setIsMenuOpen: (val: boolean) => void;
	scrollToSection: (id: string) => void;
}

const Navbar = ({
	darkMode,
	toggleDarkMode,
	isMenuOpen,
	setIsMenuOpen,
	scrollToSection,
}: NavbarProps) => {
	return (
		<nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 border-b border-gray-100 dark:border-gray-700 backdrop-blur-lg">
			<div className="container mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center space-x-3">
					<img
						src="/images/unitylogo.png"
						alt="Unity Logo"
						loading="lazy"
						className="w-13 h-13 rounded-full"
					/>

					<span className="text-md font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Unity HomeCare
					</span>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-8">
					{["home", "about", "services", "contact"].map((section) => (
						<button
							key={section}
							onClick={() => scrollToSection(section)}
							className="font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</button>
					))}

					<button
						onClick={toggleDarkMode}
						className="p-2 rounded-lg transition-all hover:scale-110 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-500">
						{darkMode ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</button>
				</div>

				{/* Mobile Menu Button */}
				<div className="flex items-center space-x-4 md:hidden">
					<button
						onClick={toggleDarkMode}
						className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-500">
						{darkMode ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</button>

					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white">
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden mt-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
					{["home", "about", "services", "contact"].map((section) => (
						<button
							key={section}
							onClick={() => scrollToSection(section)}
							className="font-bold block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</button>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
