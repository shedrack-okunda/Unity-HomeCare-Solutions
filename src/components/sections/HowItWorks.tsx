import { motion, type Variants } from "framer-motion";
import { steps } from "../../config/howitworks";

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15,
			duration: 0.6,
			ease: "easeOut",
		},
	}),
};

const HowItWorks = () => {
	return (
		<section className="py-12 px-6 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
					How It{" "}
					<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Works
					</span>
				</h2>

				<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
					Simple steps to get compassionate home care for your loved
					ones without stress.
				</p>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{steps.map((step, i) => (
						<motion.div
							key={step.title}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							variants={cardVariants}
							whileHover={{
								y: -8,
								scale: 1.03,
								transition: { duration: 0.25, ease: "easeOut" },
							}}
							className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
							<div className="flex justify-center mb-4">
								<div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
									{" "}
									<step.icon className="h-6 w-6" />
								</div>
							</div>

							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
								{" "}
								{step.title}
							</h3>

							<p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
								{step.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
