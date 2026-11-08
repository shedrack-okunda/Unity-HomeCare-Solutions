import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type React from "react";

// 🎬 Streamlined Animation Variants
const headingVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 25 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
	}),
};

// Static Data declared outside the component lifecycle
const CONTACT_CARDS = [
	{
		icon: Phone,
		title: "Call Us",
		description: "Speak directly to a caregiver or nurse anytime, day or night",
		content: (
			<div>
				<a
					href="tel:+254703919412"
					className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors"
				>
					+254 703 919 412
				</a>
				<span className="text-gray-600 dark:text-gray-400">{" / "}</span>
				<a
					href="tel:+254724551516"
					className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors"
				>
					+254 724 551 516
				</a>
			</div>
		),
		gradient: "from-blue-500 to-cyan-500",
	},
	{
		icon: Mail,
		title: "Email Us",
		description:
			"Send us your questions and care needs — we respond promptly with guidance",
		content: (
			<a
				href="mailto:unityhomecare874@gmail.com"
				className="text-purple-600 dark:text-purple-400 font-semibold hover:underline transition-colors"
			>
				unityhomecare874@gmail.com
			</a>
		),
		gradient: "from-purple-500 to-pink-500",
	},
	{
		icon: MapPin,
		title: "Visit Us",
		description:
			"Visit us or schedule a consultation with our care coordinators",
		content: (
			<p className="text-green-600 dark:text-green-400 font-semibold">
				Nairobi, Kenya
			</p>
		),
		gradient: "from-green-500 to-teal-500",
	},
];

const Contact: React.FC = () => {
	return (
		<section
			id="contact"
			aria-labelledby="contact-heading"
			className="py-12 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
		>
			<div className="container mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<motion.h2
						id="contact-heading"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={headingVariants}
						className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
					>
						Speak to{" "}
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Our Care Team
						</span>
					</motion.h2>

					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={headingVariants}
						className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
					>
						We are here to support you when care decisions matter most. Whether
						you need urgent assistance or long-term home care guidance, our team
						is ready to respond.
					</motion.p>
				</div>

				{/* Cards */}
				<div className="grid lg:grid-cols-3 gap-8">
					{CONTACT_CARDS.map((card, i) => {
						const IconComponent = card.icon;
						return (
							<motion.div
								key={card.title}
								custom={i}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.2 }}
								variants={cardVariants}
								whileHover={{ y: -6 }}
								transition={{ duration: 0.2, ease: "easeOut" }}
								className="p-8 rounded-2xl text-center bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
							>
								<div>
									<div
										className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-md`}
									>
										<IconComponent className="h-8 w-8" aria-hidden="true" />
									</div>

									<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
										{card.title}
									</h3>

									<p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
										{card.description}
									</p>
								</div>

								<div>{card.content}</div>
							</motion.div>
						);
					})}
				</div>

				{/* Footer Note */}
				<div className="mt-16 text-center">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={headingVariants}
						className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
					>
						<Clock className="h-5 w-5 mr-2 shrink-0" aria-hidden="true" />
						<span className="font-medium text-sm sm:text-base">
							24/7 Care Support Available — We’re always here when you need us
						</span>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
