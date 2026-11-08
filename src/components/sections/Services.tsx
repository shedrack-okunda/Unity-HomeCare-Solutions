import { motion, type Variants } from "framer-motion";
import { SERVICES } from "../../config/services";

// 🎬 Streamlined Variants
const headingVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
	}),
};

const Services = () => {
	return (
		<section
			id="services"
			aria-labelledby="services-heading"
			className="py-12 px-6 bg-gray-50 dark:bg-gray-800"
		>
			<div className="container mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<motion.h2
						id="services-heading"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={headingVariants}
						className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
					>
						Our{" "}
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Services
						</span>
					</motion.h2>

					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={headingVariants}
						className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
					>
						We provide compassionate, in-home healthcare services designed to
						support recovery, independence, and dignity. Whether it’s short-term
						recovery or long-term care, we bring professional support directly
						to your home so your loved ones feel safe, comfortable, and cared
						for.
					</motion.p>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{SERVICES.map(
						({ id, title, description, icon: Icon, color, image }, i) => (
							<motion.div
								key={id}
								custom={i}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.1 }}
								variants={cardVariants}
								whileHover={{ y: -6 }}
								transition={{ duration: 0.2, ease: "easeOut" }}
								className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-purple-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
							>
								{/* Icon + Title */}
								<div className="relative z-10 p-6 sm:p-8">
									<div
										className={`w-14 h-14 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white`}
									>
										<Icon aria-hidden="true" className="w-7 h-7" />
									</div>

									<h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
										{title}
									</h3>
								</div>

								{/* Image with CSS transitions instead of JS */}
								<div className="relative w-full h-52 overflow-hidden bg-gray-200 dark:bg-gray-700">
									<img
										src={image}
										alt={title}
										className="w-full h-full object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
										loading="lazy"
										width={400}
										height={300}
									/>
								</div>

								{/* Description */}
								<div className="relative z-10 p-6 sm:p-8 flex-grow flex flex-col justify-between">
									<p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
										{description}
									</p>

									<div className={`h-0.5 w-full bg-gradient-to-r ${color}`} />
								</div>
							</motion.div>
						),
					)}
				</div>
			</div>
		</section>
	);
};

export default Services;
