import { Mail, MapPin, Phone } from "lucide-react";

export const CONTACT_CARDS = [
	{
		icon: Phone,
		title: "Call Us",
		description: "Speak directly to a caregiver or nurse anytime, day or night",
		content: (
			<div>
				<a
					href="tel:+254703919412"
					className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors"
				>
					+254 703 919 412
				</a>
				<span className="text-gray-600 dark:text-gray-400">{" / "}</span>
				<a
					href="tel:+254724551516"
					className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors"
				>
					+254 724 551 516
				</a>
			</div>
		),
		gradient: "from-blue-500 to-cyan-500",
	},
	{
		icon: Mail,
		title: "Email Us",
		description:
			"Send us your questions and care needs — we respond promptly with guidance",
		content: (
			<a
				href="mailto:unityhomecare874@gmail.com"
				className="text-purple-600 dark:text-purple-400 font-semibold hover:underline transition-colors"
			>
				unityhomecare874@gmail.com
			</a>
		),
		gradient: "from-purple-500 to-pink-500",
	},
	{
		icon: MapPin,
		title: "Visit Us",
		description:
			"Visit us or schedule a consultation with our care coordinators",
		content: (
			<p className="text-green-600 dark:text-green-400 font-semibold">
				Nairobi, Kenya
			</p>
		),
		gradient: "from-green-500 to-teal-500",
	},
];
