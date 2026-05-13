import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../config/testimonials";

const cardVariants: Variants = {
	hidden: (direction: number) => ({
		x: direction > 0 ? 120 : -120,
		opacity: 0,
		scale: 0.95,
	}),
	visible: {
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.1,
			ease: "easeOut",
		},
	},
	exit: (direction: number) => ({
		x: direction > 0 ? -120 : 120,
		opacity: 0,
		scale: 0.95,
		transition: {
			duration: 0.1,
			ease: "easeInOut",
		},
	}),
};

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(1);

	const nextSlide = () => {
		setDirection(1);

		setCurrentIndex((prev) =>
			prev + 1 >= testimonials.length ? 0 : prev + 1,
		);
	};

	const prevSlide = () => {
		setDirection(-1);

		setCurrentIndex((prev) =>
			prev - 1 < 0 ? testimonials.length - 1 : prev - 1,
		);
	};

	// Desktop shows 3 cards
	// Mobile shows 1 card
	const visibleTestimonials = [
		testimonials[currentIndex],
		testimonials[(currentIndex + 1) % testimonials.length],
		testimonials[(currentIndex + 2) % testimonials.length],
	];

	return (
		<section
			id="testimonials"
			className="py-20 px-6 bg-white dark:bg-gray-900">
			<div className="container mx-auto">
				{/* Heading */}
				<div className="text-center mb-14">
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						What People Say
					</h2>

					<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
						Real experiences from patients and families who trusted
						Unity HomeCare Solutions with their loved ones.
					</p>
				</div>

				{/* Slider */}
				<div className="relative">
					{/* Left Arrow */}
					<button
						onClick={prevSlide}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-1   dark:border-gray-700 hover:scale-110 transition-all duration-300">
						<ChevronLeft className="h-6 w-6 text-gray-700 dark:text-white" />
					</button>

					{/* Right Arrow */}
					<button
						onClick={nextSlide}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-1  dark:border-gray-700 hover:scale-110 transition-all duration-300">
						<ChevronRight className="h-6 w-6 text-gray-700 dark:text-white" />
					</button>

					{/* Testimonials */}
					<div className="overflow-hidden px-10">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
							<AnimatePresence mode="wait" custom={direction}>
								{visibleTestimonials.map((t, i) => (
									<motion.div
										key={`${t.name}-${currentIndex}-${i}`}
										custom={direction}
										variants={cardVariants}
										initial="hidden"
										animate="visible"
										exit="exit"
										className={`rounded-3xl border border-gray-100 dark:border-gray-700 
bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-2xl 
transition-all duration-500 overflow-hidden
${i > 0 ? "hidden lg:block" : "block"}`}>
										<div className="p-4">
											{/* Top */}
											<div className="items-center gap-4 mb-4">
												{/* Name + Role */}
												<div className="text-center">
													<h3 className="font-bold text-lg text-gray-900 dark:text-white">
														{t.name}
													</h3>

													<p className="text-sm text-gray-500 dark:text-gray-400">
														{t.role}
													</p>
												</div>
											</div>

											{/* Testimony */}
											<p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-left">
												"{t.message}"
											</p>
										</div>
									</motion.div>
								))}
							</AnimatePresence>
						</div>
					</div>

					{/* Dots */}
					<div className="flex justify-center mt-10 gap-3">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => {
									setDirection(index > currentIndex ? 1 : -1);
									setCurrentIndex(index);
								}}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									index === currentIndex
										? "bg-blue-600 scale-125"
										: "bg-gray-300 dark:bg-gray-600"
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
