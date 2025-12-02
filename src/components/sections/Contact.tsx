import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type React from "react";

interface ContactProps {
	darkMode: boolean;
}

// 🎬 Animation Variants
const headingVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: "easeOut" },
	},
};

const paragraphVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, scale: 0.9, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
	}),
};

const footerNoteVariants: Variants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.6, delay: 0.8 },
	},
};

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
	return (
		<section
			id="contact"
			aria-labelledby="contact-heading"
			className={`py-20 px-6 ${
				darkMode
					? "bg-gradient-to-br from-gray-800 to-gray-900"
					: "bg-gradient-to-br from-blue-50 to-purple-50"
			}`}>
			<div className="container mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<motion.h2
						id="contact-heading"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={headingVariants}
						className={`text-4xl lg:text-5xl font-bold mb-6 ${
							darkMode ? "text-white" : "text-gray-900"
						}`}>
						Get In{" "}
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Touch
						</span>
					</motion.h2>

					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={paragraphVariants}
						className={`text-xl max-w-3xl mx-auto ${
							darkMode ? "text-gray-300" : "text-gray-600"
						}`}>
						Ready to provide the care your family deserves. Contact
						us today for a free consultation.
					</motion.p>
				</div>

				{/* Cards */}
				<div className="grid lg:grid-cols-3 gap-8">
					{[
						{
							icon: (
								<Phone
									className="h-8 w-8 text-white"
									aria-hidden="true"
								/>
							),
							title: "Call Us",
							description: "Available 24/7 for emergencies",
							content: (
								<>
									<a
										href="tel:+254703919412"
										className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
										+254 703 919 412
									</a>
									<span
										className={`${
											darkMode
												? "text-gray-300"
												: "text-gray-600"
										}`}>
										{" / "}
									</span>
									<a
										href="tel:+254724551516"
										className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
										+254 724 551 516
									</a>
								</>
							),
							gradient: "from-blue-500 to-cyan-500",
						},
						{
							icon: (
								<Mail
									className="h-8 w-8 text-white"
									aria-hidden="true"
								/>
							),
							title: "Email Us",
							description:
								"Get a detailed response within 24 hours",
							content: (
								<a
									href="mailto:anjemmedicaresolutions@gmail.com"
									className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
									anjemmedicaresolutions@gmail.com
								</a>
							),
							gradient: "from-purple-500 to-pink-500",
						},
						{
							icon: (
								<MapPin
									className="h-8 w-8 text-white"
									aria-hidden="true"
								/>
							),
							title: "Visit Us",
							description: "Our office is open Monday - Friday",
							content: (
								<p className="text-green-600 font-semibold">
									Nairobi, Kenya
								</p>
							),
							gradient: "from-green-500 to-teal-500",
						},
					].map((card, i) => (
						<motion.div
							key={card.title}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={cardVariants}
							className={`p-8 rounded-2xl text-center transition-all hover:scale-105 ${
								darkMode
									? "bg-gray-800 border-gray-700"
									: "bg-white border-gray-100"
							} border shadow-lg`}>
							<div
								className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
								{card.icon}
							</div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									darkMode ? "text-white" : "text-gray-900"
								}`}>
								{card.title}
							</h3>
							<p
								className={`${
									darkMode ? "text-gray-300" : "text-gray-600"
								} mb-4`}>
								{card.description}
							</p>
							{card.content}
						</motion.div>
					))}
				</div>

				{/* Footer Note */}
				<div className="mt-16 text-center">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={footerNoteVariants}
						className={`inline-flex items-center px-6 py-3 rounded-full ${
							darkMode
								? "bg-blue-900/50 text-blue-300"
								: "bg-blue-100 text-blue-800"
						} border ${
							darkMode ? "border-blue-700" : "border-blue-200"
						}`}>
						<Clock className="h-5 w-5 mr-2" aria-hidden="true" />
						<span className="font-medium">
							Emergency Support Available 24/7
						</span>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
