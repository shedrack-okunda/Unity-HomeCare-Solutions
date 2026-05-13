import { ArrowRight, Shield } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type React from "react";

interface HeroProps {
	scrollToSection: (sectionId: string) => void;
}

// 🎨 Title animation: spring, bouncy
const titleVariants: Variants = {
	hidden: { opacity: 0, y: 60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, type: "spring", stiffness: 70 },
	},
};

// ✍️ Paragraph: fade + subtle upward ease
const paragraphVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
	},
};

// 🔘 Buttons: staggered pop-in
const buttonVariants: Variants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: (i: number) => ({
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			delay: 0.4 + i * 0.15,
			ease: "easeOut",
		},
	}),
};

// 📊 Stats: fade-up stagger
const statsVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.8 + i * 0.2,
			ease: "easeOut",
		},
	}),
};

// 🖼️ Image: smooth zoom-in
const imageVariants: Variants = {
	hidden: { opacity: 0, scale: 0.9, y: 50 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { duration: 1, delay: 0.6, ease: "easeOut" },
	},
};

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
	return (
		<section
			id="home"
			aria-labelledby="hero-heading"
			className="pt-20 pb-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
			<div className="container mx-auto">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left content */}
					<div className="space-y-8">
						<div className="space-y-6">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={paragraphVariants}
								className="inline-flex items-center px-4 py-2 mt-4 rounded-full bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700">
								<Shield className="h-4 w-4 mr-2" />

								<span className="text-sm font-medium">
									Compassionate Home Healthcare{" "}
								</span>
							</motion.div>

							<motion.h1
								id="hero-heading"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={titleVariants}
								className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
								Providing Trusted Care for Your{" "}
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									Loved Ones
								</span>
								<br /> at Home
							</motion.h1>

							<motion.p
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={paragraphVariants}
								className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
								We provide compassionate home nursing and
								personalized healthcare support to help your
								loved ones recover, heal, and live comfortably
								in the place they feel safest — home.
							</motion.p>
						</div>

						{/* Buttons */}
						<div className="flex flex-col sm:flex-row gap-4">
							{[
								{
									label: "Explore Our Services",
									onClick: () => scrollToSection("services"),
									primary: true,
								},
								{
									label: "Get In Touch",
									onClick: () => scrollToSection("contact"),
									primary: false,
								},
							].map((btn, i) => (
								<motion.button
									key={i}
									custom={i}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={buttonVariants}
									onClick={btn.onClick}
									className={`inline-flex items-center justify-center gap-2 
px-6 py-3 rounded-xl font-semibold text-base transition-all focus:outline-none focus:ring-2 focus:ring-offset-2
${
	btn.primary
		? `group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white 
		hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 
		shadow-lg hover:shadow-blue-500/40 
		border border-transparent hover:border-blue-400 
		hover:-translate-y-0.5`
		: "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-500"
}`}>
									{btn.label}

									{btn.primary && (
										<ArrowRight
											className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
											aria-hidden="true"
										/>
									)}
								</motion.button>
							))}
						</div>

						{/* Stats */}
						<div className="flex ml-5 items-center space-x-8">
							{[
								{ label: "Available", value: "24/7" },
								{ label: "Families Served", value: "200+" },
								{ label: "Rated Service", value: "5★" },
							].map((stat, i) => (
								<motion.div
									key={i}
									custom={i}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={statsVariants}
									className="text-center">
									<div className="text-3xl font-bold text-gray-900 dark:text-white">
										{stat.value}
									</div>

									<div className="text-sm text-gray-600 dark:text-gray-400">
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Right image */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={imageVariants}
						className="relative">
						<img
							src="/images/hero.png"
							alt="Professional nurse providing compassionate care to elderly patient"
							className="w-full h-auto rounded-2xl shadow-2xl object-cover"
							loading="lazy"
							width={600}
							height={500}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
