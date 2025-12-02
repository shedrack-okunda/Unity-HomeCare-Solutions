import { Heart, Mail, Phone } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type React from "react";

interface FooterProps {
	darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
	const year = new Date().getFullYear();

	const fadeUp: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: (custom: number = 0) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: custom * 0.2,
				duration: 0.6,
				ease: "easeOut",
			},
		}),
	};

	return (
		<footer
			className={`py-12 px-6 ${
				darkMode
					? "bg-gray-900 border-gray-800"
					: "bg-gray-800 border-gray-200"
			} border-t`}
			aria-label="Footer">
			<div className="container mx-auto">
				<div className="text-center">
					{/* Logo + Title */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeUp}
						custom={0}
						className="flex items-center justify-center space-x-3 mb-6">
						<div
							className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600"
							aria-hidden="true">
							<Heart
								className="h-6 w-6 text-white"
								aria-hidden="true"
							/>
						</div>
						<span className="text-2xl font-bold text-white">
							Anjem MediCare Solutions
						</span>
					</motion.div>

					{/* Description */}
					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeUp}
						custom={1}
						className="text-gray-400 mb-8 max-w-2xl mx-auto">
						Providing compassionate, professional home healthcare
						services across Nairobi and surrounding areas. Your
						health, our priority.
					</motion.p>

					{/* Contact Icons */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeUp}
						custom={2}
						className="flex justify-center space-x-6 mb-8">
						<a
							href="tel:+254703919412"
							className="text-gray-400 hover:text-white transition-colors"
							aria-label="Call Unity Anjem Medicare Solutions">
							<Phone className="h-6 w-6" aria-hidden="true" />
						</a>
						<a
							href="mailto:anjemmedicaresolutions@gmail.com"
							className="text-gray-400 hover:text-white transition-colors"
							aria-label="Email Anjem Medicare Solutions">
							<Mail className="h-6 w-6" aria-hidden="true" />
						</a>
					</motion.div>

					{/* Footer bottom */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeUp}
						custom={3}
						className="border-t border-gray-700 pt-8">
						<p className="text-gray-500 text-sm">
							© {year} Anjem Medicare Solutions. All rights
							reserved. | Licensed Healthcare Provider
						</p>
					</motion.div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
