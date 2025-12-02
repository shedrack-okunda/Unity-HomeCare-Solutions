import { Moon, Sun, Menu, X, Heart } from "lucide-react";

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
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				darkMode
					? "bg-gray-900/95 border-gray-700"
					: "bg-white/95 border-gray-100"
			} border-b backdrop-blur-lg`}>
			<div className="container mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center space-x-3">
					<div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
						<Heart className="h-6 w-6 text-white" />
					</div>
					<span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Anjem MediCare
					</span>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-8">
					{["home", "about", "services", "contact"].map((section) => (
						<button
							key={section}
							onClick={() => scrollToSection(section)}
							className={`font-bold hover:text-blue-600 transition-colors ${
								darkMode ? "text-gray-300" : "text-gray-700"
							}`}>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</button>
					))}
					<button
						onClick={toggleDarkMode}
						className={`p-2 rounded-lg transition-all hover:scale-110 ${
							darkMode
								? "bg-gray-800 text-yellow-500"
								: "bg-gray-100 text-gray-700"
						}`}>
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
						className={`p-2 rounded-lg ${
							darkMode
								? "bg-gray-800 text-yellow-500"
								: "bg-gray-100 text-gray-700"
						}`}>
						{darkMode ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</button>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className={`p-2 rounded-lg ${
							darkMode
								? "bg-gray-800 text-white"
								: "bg-gray-100 text-gray-700"
						}`}>
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
				<div
					className={`md:hidden mt-4 p-4 rounded-xl ${
						darkMode ? "bg-gray-800" : "bg-gray-50"
					}`}>
					{["home", "about", "services", "contact"].map((section) => (
						<button
							key={section}
							onClick={() => scrollToSection(section)}
							className={`font-bold block w-full text-left py-2 hover:text-blue-600 transition-colors ${
								darkMode ? "text-gray-300" : "text-gray-700"
							}`}>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</button>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
