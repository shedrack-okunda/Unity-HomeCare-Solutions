import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import Hero from "./components/sections/Hero";
import AboutUs from "./components/sections/About";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen pb-16 md:pb-0 transition-all duration-500 bg-white dark:bg-gray-900 flex flex-col justify-between">
				<Navbar />

				{/* Main Content with top padding so it doesn't hide under the fixed Navbar */}
				<main className="pt-20 flex-grow">
					<Routes>
						<Route path="/" element={<Hero />} />
						<Route path="/about" element={<AboutUs />} />
						<Route path="/services" element={<Services />} />
						<Route path="/testimonials" element={<Testimonials />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>

				<Footer />
				<WhatsAppFloat />
			</div>
		</BrowserRouter>
	);
}

export default App;
