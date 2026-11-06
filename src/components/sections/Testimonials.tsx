import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../../config/testimonials";

const cardVariants: Variants = {
	hidden: (direction: number) => ({
		x: direction > 0 ? 80 : -80,
		opacity: 0,
		scale: 0.96,
	}),
	visible: {
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.4,
			ease: [0.25, 1, 0.5, 1],
		},
	},
	exit: (direction: number) => ({
		x: direction > 0 ? -80 : 80,
		opacity: 0,
		scale: 0.96,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	}),
};

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const nextSlide = () => {
		setDirection(1);
		setCurrentIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setDirection(-1);
		setCurrentIndex((prev) =>
			prev - 1 < 0 ? testimonials.length - 1 : prev - 1,
		);
	};

	// Autoplay feature
	useEffect(() => {
		if (!isAutoPlaying) return;
		const interval = setInterval(() => {
			nextSlide();
		}, 5000);
		return () => clearInterval(interval);
	}, [currentIndex, isAutoPlaying]);

	// Desktop: 3 visible cards | Mobile: 1 card
	const visibleTestimonials = [
		testimonials[currentIndex],
		testimonials[(currentIndex + 1) % testimonials.length],
		testimonials[(currentIndex + 2) % testimonials.length],
	];

	return (
		<section
			id="testimonials"
			className="py-6 px-6 bg-slate-50/50 dark:bg-gray-900/60 relative overflow-hidden"
		>
			{/* Ambient Background Glows */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

			<div className="container mx-auto relative z-10">
				{/* Heading */}
				<div className="text-center mb-16">
					<span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-900/40 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-800/60">
						Testimonials
					</span>
					<h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-4 tracking-tight">
						What{" "}
						<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
							People Say
						</span>
					</h2>
					<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
						Real experiences from patients and families who trusted Unity
						HomeCare Solutions with their loved ones.
					</p>
				</div>

				{/* Slider Container */}
				<div
					className="relative px-2 sm:px-12"
					onMouseEnter={() => setIsAutoPlaying(false)}
					onMouseLeave={() => setIsAutoPlaying(true)}
				>
					{/* Navigation Buttons */}
					<button
						onClick={prevSlide}
						aria-label="Previous testimonial"
						className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700 shadow-lg text-gray-700 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<ChevronLeft className="h-5 w-5" />
					</button>

					<button
						onClick={nextSlide}
						aria-label="Next testimonial"
						className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-200/80 dark:border-gray-700 shadow-lg text-gray-700 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<ChevronRight className="h-5 w-5" />
					</button>

					{/* Cards Grid */}
					<div className="overflow-hidden py-4 px-2">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							<AnimatePresence mode="wait" custom={direction}>
								{visibleTestimonials.map((t, i) => {
									// Fallback initial avatar if t.avatar doesn't exist
									const initial = t.name ? t.name.charAt(0) : "U";

									return (
										<motion.div
											key={`${t.name}-${currentIndex}-${i}`}
											custom={direction}
											variants={cardVariants}
											initial="hidden"
											animate="visible"
											exit="exit"
											className={`relative flex flex-col justify-between p-8 rounded-3xl border border-gray-100 dark:border-gray-800/80 
bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-1.5 
transition-all duration-300 group
${i > 0 ? "hidden lg:flex" : "flex"}`}
										>
											{/* Top Section: Quote Icon & Ratings */}
											<div>
												<div className="flex items-center justify-between mb-6">
													<div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
														<Quote className="h-6 w-6" />
													</div>
													<div className="flex items-center space-x-1">
														{[...Array(5)].map((_, starIndex) => (
															<Star
																key={starIndex}
																className="h-4 w-4 fill-amber-400 text-amber-400"
															/>
														))}
													</div>
												</div>

												{/* Testimony Content */}
												<p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base italic mb-8">
													"{t.message}"
												</p>
											</div>

											{/* Bottom Section: Author Details */}
											<div className="flex items-center space-x-4 pt-6 border-t border-gray-100 dark:border-gray-700/60">
												{t.avatar ? (
													<img
														src={t.avatar}
														alt={t.name}
														className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20"
													/>
												) : (
													<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white font-bold text-lg flex items-center justify-center ring-2 ring-blue-500/20">
														{initial}
													</div>
												)}
												<div>
													<h3 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
														{t.name}
													</h3>
													<p className="text-xs font-medium text-gray-500 dark:text-gray-400">
														{t.role}
													</p>
												</div>
											</div>
										</motion.div>
									);
								})}
							</AnimatePresence>
						</div>
					</div>

					{/* Navigation Indicator Dots */}
					<div className="flex justify-center items-center mt-12 gap-2">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => {
									setDirection(index > currentIndex ? 1 : -1);
									setCurrentIndex(index);
								}}
								aria-label={`Go to slide ${index + 1}`}
								className={`h-2.5 rounded-full transition-all duration-300 ${
									index === currentIndex
										? "w-8 bg-gradient-to-r from-blue-600 to-purple-600"
										: "w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
