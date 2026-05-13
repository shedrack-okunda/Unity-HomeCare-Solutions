import { motion, type Variants } from "framer-motion";
import { SERVICES } from "../../config/services";

// 🎬 Variants
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
		transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
	}),
};

const Services = () => {
	return (
		<section
			id="services"
			aria-labelledby="services-heading"
			className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<motion.h2
						id="services-heading"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={headingVariants}
						className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
						Our{" "}
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Services
						</span>
					</motion.h2>

					<motion.p
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={paragraphVariants}
						className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
						We provide compassionate, in-home healthcare services
						designed to support recovery, independence, and dignity.
						Whether it’s short-term recovery or long-term care, we
						bring professional support directly to your home so your
						loved ones feel safe, comfortable, and cared for.
					</motion.p>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
					{SERVICES.map(
						(
							{
								id,
								title,
								description,
								icon: Icon,
								color,
								image,
							},
							i,
						) => (
							<motion.div
								key={id}
								custom={i}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={cardVariants}
								className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-blue-50 via-purple-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 flex flex-col">
								{/* Icon + Title */}
								<div className="relative z-10 p-4 sm:p-6 lg:p-8">
									<motion.div
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: 0.2,
										}}
										className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
										<Icon aria-hidden="true" />
									</motion.div>

									<motion.h3
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.6,
											delay: 0.3,
										}}
										className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
										{title}
									</motion.h3>
								</div>

								{/* Image */}
								<div className="relative w-full h-48 sm:h-52 lg:h-56 overflow-hidden">
									<motion.img
										initial={{ opacity: 0, scale: 0.95 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.7 }}
										src={image}
										alt={title}
										className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-60 group-hover:scale-110 transition-all duration-700"
										loading="lazy"
										width={400}
										height={300}
									/>
								</div>

								{/* Description */}
								<div className="relative z-10 p-4 sm:px-6 lg:px-8 pb-6 flex-grow flex flex-col">
									<motion.p
										initial={{ opacity: 0, y: 15 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.6,
											delay: 0.5,
										}}
										className="text-md md:text-base lg:text-base leading-relaxed text-gray-700 dark:text-white">
										{description}
									</motion.p>

									<motion.div
										initial={{ width: 0 }}
										whileInView={{ width: "100%" }}
										viewport={{ once: true }}
										transition={{
											duration: 0.7,
											delay: 0.6,
										}}
										className={`mt-4 sm:mt-5 lg:mt-6 h-0.5 bg-gradient-to-r ${color}`}
									/>
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
