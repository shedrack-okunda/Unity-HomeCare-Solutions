import { motion, type Variants } from "framer-motion";
import { testimonials } from "../../config/testimonials";

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.6,
			ease: "easeOut",
		},
	}),
};

const Testimonials = () => {
	return (
		<section
			id="testimonials"
			className="py-20 px-6 bg-white dark:bg-gray-900">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
					What People Say
				</h2>

				<p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
					Real experiences from patients, families, and our medical
					team.
				</p>

				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((t, i) => (
						<motion.div
							key={i}
							custom={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={cardVariants}
							className="p-6 rounded-2xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition">
							<p className="text-gray-700 dark:text-gray-300 mb-6 italic">
								"{t.message}"
							</p>

							<div className="font-semibold text-gray-900 dark:text-white">
								{t.name}
							</div>

							<div className="text-sm text-gray-500 dark:text-gray-400">
								{t.role}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
