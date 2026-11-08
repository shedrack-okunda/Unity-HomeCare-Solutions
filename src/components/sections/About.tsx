import { motion, type Variants } from "framer-motion";
import HowItWorks from "./HowItWorks";
import { LEFT_CARDS, RIGHT_CARDS } from "../../config/aboutUs";

const textVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
	}),
};

// Static data declared outside the component to prevent re-allocation

const AboutUs = () => {
	return (
		<>
			<section
				id="about"
				aria-labelledby="about-title"
				className="py-12 px-6 bg-white dark:bg-gray-900"
			>
				<div className="container mx-auto">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Left Content */}
						<div className="space-y-8">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={textVariants}
								className="space-y-6"
							>
								<h2
									id="about-title"
									className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center lg:text-left"
								>
									Why Families Trust{" "}
									<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
										Unity HomeCare Solutions?
									</span>
								</h2>

								<p className="text-xl text-center lg:text-left leading-relaxed text-gray-600 dark:text-gray-300">
									We bring professional and compassionate healthcare directly
									into the home, so families can feel confident their loved ones
									are safe, cared for, and treated with dignity. We don’t just
									provide care — we support families through every step of the
									healing journey.
								</p>
							</motion.div>

							{/* Two left cards */}
							<div className="grid sm:grid-cols-2 gap-6">
								{LEFT_CARDS.map((card, i) => {
									const IconComponent = card.icon;
									return (
										<motion.div
											key={card.title}
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true, amount: 0.2 }}
											custom={i}
											variants={cardVariants}
											className={`p-6 rounded-xl border ${card.classes}`}
										>
											<IconComponent
												aria-hidden="true"
												className={`h-8 w-8 mb-4 ${card.iconColor}`}
											/>
											<h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
												{card.title}
											</h3>
											<p className="text-sm text-gray-600 dark:text-gray-300">
												{card.desc}
											</p>
										</motion.div>
									);
								})}
							</div>
						</div>

						{/* Right Grid of Feature Cards */}
						<div className="relative">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{RIGHT_CARDS.map((card, i) => {
									const IconComponent = card.icon;
									return (
										<motion.div
											key={card.title}
											initial="hidden"
											whileInView="visible"
											viewport={{ once: true, amount: 0.2 }}
											custom={i}
											variants={cardVariants}
											className={`p-6 rounded-2xl border ${card.classes}`}
										>
											<IconComponent
												aria-hidden="true"
												className={`h-8 w-8 mb-4 ${card.iconColor}`}
											/>
											<h4 className="font-semibold text-gray-900 dark:text-white">
												{card.title}
											</h4>
										</motion.div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>

			<HowItWorks />
		</>
	);
};

export default AboutUs;
