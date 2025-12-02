import { Clock, Heart, Shield, Star, Users } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type React from "react";

interface AboutUsProps {
	darkMode: boolean;
}

const textVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
	}),
};

const AboutUs: React.FC<AboutUsProps> = ({ darkMode }) => {
	return (
		<section
			id="about"
			aria-labelledby="about-title"
			className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
			<div className="container mx-auto">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left Content */}
					<div className="space-y-8">
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							variants={textVariants}
							className="space-y-6">
							<h2
								id="about-title"
								className={`text-4xl lg:text-5xl font-bold ${
									darkMode ? "text-white" : "text-gray-900"
								}`}>
								Why Choose{" "}
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									Anjem Medicare?
								</span>
							</h2>
							<p
								className={`text-xl leading-relaxed ${
									darkMode ? "text-gray-300" : "text-gray-600"
								}`}>
								We believe that quality healthcare should be
								accessible in the comfort of your own home. Our
								dedicated team of professionals provides
								personalized care with compassion, dignity, and
								respect.
							</p>
						</motion.div>

						{/* Two left cards */}
						<div className="grid sm:grid-cols-2 gap-6">
							{[
								{
									icon: (
										<Users
											aria-hidden="true"
											className="h-8 w-8 text-blue-600 mb-4"
										/>
									),
									title: "Licensed Professionals",
									desc: "Certified healthcare providers with years of experience",
									classes: darkMode
										? "bg-gray-800 border-gray-700"
										: "bg-blue-50 border-blue-100",
								},
								{
									icon: (
										<Clock
											aria-hidden="true"
											className="h-8 w-8 text-purple-600 mb-4"
										/>
									),
									title: "24/7 Availability",
									desc: "Round-the-clock support when you need it most",
									classes: darkMode
										? "bg-gray-800 border-gray-700"
										: "bg-purple-50 border-purple-100",
								},
							].map((card, i) => (
								<motion.div
									key={i}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.2 }}
									custom={i}
									variants={cardVariants}
									className={`p-6 rounded-xl border ${card.classes}`}>
									{card.icon}
									<h3
										className={`font-semibold mb-2 ${
											darkMode
												? "text-white"
												: "text-gray-900"
										}`}>
										{card.title}
									</h3>
									<p
										className={`text-sm ${
											darkMode
												? "text-gray-300"
												: "text-gray-600"
										}`}>
										{card.desc}
									</p>
								</motion.div>
							))}
						</div>
					</div>

					{/* Right Grid of Feature Cards */}
					<div className="relative">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{[
								{
									icon: (
										<Heart
											aria-hidden="true"
											className={`h-8 w-8 mb-4 ${
												darkMode
													? "text-blue-300"
													: "text-blue-600"
											}`}
										/>
									),
									title: "Compassionate Care",
									classes: darkMode
										? "bg-gradient-to-br from-blue-900 to-purple-900 border-blue-700"
										: "bg-gradient-to-br from-blue-100 to-purple-100 border-blue-200",
								},
								{
									icon: (
										<Shield
											aria-hidden="true"
											className={`h-8 w-8 mb-4 ${
												darkMode
													? "text-green-300"
													: "text-green-600"
											}`}
										/>
									),
									title: "Safety First",
									classes: darkMode
										? "bg-gradient-to-br from-green-900 to-teal-900 border-green-700 mt-8"
										: "bg-gradient-to-br from-green-100 to-teal-100 border-green-200 mt-8",
								},
								{
									icon: (
										<Users
											aria-hidden="true"
											className={`h-8 w-8 mb-4 ${
												darkMode
													? "text-purple-300"
													: "text-purple-600"
											}`}
										/>
									),
									title: "Family Focused",
									classes: darkMode
										? "bg-gradient-to-br from-purple-900 to-pink-900 border-purple-700 -mt-4"
										: "bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200 -mt-4",
								},
								{
									icon: (
										<Star
											aria-hidden="true"
											className={`h-8 w-8 mb-4 ${
												darkMode
													? "text-orange-300"
													: "text-orange-600"
											}`}
										/>
									),
									title: "Quality Assured",
									classes: darkMode
										? "bg-gradient-to-br from-orange-900 to-red-900 border-orange-700 mt-4"
										: "bg-gradient-to-br from-orange-100 to-red-100 border-orange-200 mt-4",
								},
							].map((card, i) => (
								<motion.div
									key={i}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.2 }}
									custom={i}
									variants={cardVariants}
									className={`p-6 rounded-2xl border ${card.classes}`}>
									{card.icon}
									<h4
										className={`font-semibold ${
											darkMode
												? "text-white"
												: "text-gray-900"
										}`}>
										{card.title}
									</h4>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
