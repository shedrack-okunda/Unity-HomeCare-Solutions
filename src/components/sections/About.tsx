import { Clock, Heart, Shield, Star, Users } from "lucide-react";
import { motion, type Variants } from "framer-motion";

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

const AboutUs = () => {
	return (
		<section
			id="about"
			aria-labelledby="about-title"
			className="py-20 px-6 bg-white dark:bg-gray-900">
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
								className="text-4xl text-center lg:text-5xl font-bold text-gray-900 dark:text-white">
								Why Choose{" "}
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									Unity HomeCare Solutions?
								</span>
							</h2>

							<p className="text-xl text-center leading-relaxed text-gray-600 dark:text-gray-300">
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
									classes:
										"bg-blue-50 dark:bg-gray-800 border-blue-100 dark:border-gray-700",
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
									classes:
										"bg-purple-50 dark:bg-gray-800 border-purple-100 dark:border-gray-700",
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

									<h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
										{card.title}
									</h3>

									<p className="text-sm text-gray-600 dark:text-gray-300">
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
										<Shield
											aria-hidden="true"
											className="h-8 w-8 mb-4 text-green-600 dark:text-green-300"
										/>
									),
									title: "Safety First",
									classes:
										"bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 border-green-200 dark:border-green-700 mt-8",
								},
								{
									icon: (
										<Star
											aria-hidden="true"
											className="h-8 w-8 mb-4 text-orange-600 dark:text-orange-300"
										/>
									),
									title: "Quality Assured",
									classes:
										"bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 border-orange-200 dark:border-orange-700 mt-4",
								},
								{
									icon: (
										<Heart
											aria-hidden="true"
											className="h-8 w-8 mb-4 text-blue-600 dark:text-blue-300"
										/>
									),
									title: "Compassionate Care",
									classes:
										"bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border-blue-200 dark:border-blue-700",
								},
								{
									icon: (
										<Users
											aria-hidden="true"
											className="h-8 w-8 mb-4 text-purple-600 dark:text-purple-300"
										/>
									),
									title: "Family Focused",
									classes:
										"bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 border-purple-200 dark:border-purple-700 -mt-4",
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

									<h4 className="font-semibold text-gray-900 dark:text-white">
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
