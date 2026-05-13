import { Heart, Mail, Phone } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const Footer = () => {
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
			className="py-12 px-6 bg-gray-800 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
			aria-label="Footer">
			<div className="container mx-auto">
				<div className="text-center">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeUp}
						custom={0}
						className="flex items-center justify-center space-x-3 mb-6">
						<div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
							<Heart className="h-6 w-6 text-white" />
						</div>

						<span className="text-2xl font-bold text-white">
							Unity HomeCare Solutions
						</span>
					</motion.div>

					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeUp}
						custom={1}
						className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
						We are committed to providing safe, respectful, and
						compassionate home care — supporting families across
						Nairobi with dignity, professionalism, and trust.
					</motion.p>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeUp}
						custom={2}
						className="flex justify-center space-x-6 mb-8">
						<a
							href="tel:+254703919412"
							className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
							{" "}
							<Phone className="h-6 w-6" />
						</a>

						<a
							href="mailto:unityhomecare874@gmail.com"
							className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
							<Mail className="h-6 w-6" />
						</a>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeUp}
						custom={3}
						className="border-t border-gray-300 dark:border-gray-700 pt-8">
						<p className="text-gray-50">
							Available 24/7 for home care support across Nairobi
						</p>

						<p className="text-gray-500 text-sm">
							© {year} Unity HomeCare Solutions. Caring for
							families with dignity and respect.
						</p>
					</motion.div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
