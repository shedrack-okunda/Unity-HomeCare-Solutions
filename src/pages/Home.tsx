import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import AboutUs from "../components/sections/About";
import Footer from "../components/common/Footer";
import { SERVICES } from "../config/services";
import Contact from "../components/sections/Contact";
import { useTheme } from "../../hooks/useTheme";
import Testimonials from "../components/sections/Testimonials";

const UnityHomeCare = () => {
	const { darkMode, toggleTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeService, setActiveService] = useState(0);
	console.log(activeService);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveService((prev) => (prev + 1) % SERVICES.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	const scrollToSection = (sectionId: string) => {
		document
			.getElementById(sectionId)
			?.scrollIntoView({ behavior: "smooth" });
		setIsMenuOpen(false);
	};

	return (
		<div className="min-h-screen transition-all duration-500 bg-white dark:bg-gray-900">
			<Navbar
				darkMode={darkMode}
				toggleDarkMode={toggleTheme}
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				scrollToSection={scrollToSection}
			/>
			<Hero scrollToSection={scrollToSection} />
			<AboutUs />
			<Services />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
};

export default UnityHomeCare;
