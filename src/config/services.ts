import {
	Accessibility,
	Apple,
	Bandage,
	BarChart,
	Bath,
	Home,
	Pill,
	Stethoscope,
	Users,
	type LucideIcon,
} from "lucide-react";

export interface Services {
	id: string;
	title: string;
	description: string;
	icon: LucideIcon;
	color: string;
	image: string;
}

export const SERVICES: Services[] = [
	{
		id: "post-discharge",
		title: "Post Discharge Care",
		description:
			"We support your loved one after hospital discharge by continuing care at home, helping them recover safely and comfortably while reducing the risk of complications or readmission.",
		icon: Home,
		color: "from-blue-500 to-cyan-500",
		image: "/images/postdischarge.avif",
	},
	{
		id: "mobility-assistance",
		title: "Mobility Assistance",
		description:
			"We assist with safe movement around the home, helping your loved ones maintain independence, confidence, and stability while reducing the risk of falls.",
		icon: Accessibility,
		color: "from-green-500 to-emerald-500",
		image: "/images/mobility.png",
	},
	{
		id: "nutrition-support",
		title: "Feeding & Nutrition Support",
		description:
			"We ensure your loved ones receive proper nutrition through meal support and feeding assistance tailored to their health needs and recovery journey.",
		icon: Apple,
		color: "from-orange-500 to-red-500",
		image: "/images/feeding.png",
	},

	{
		id: "wound-care",
		title: "Wound Care Management",
		description:
			"We provide careful wound care at home, following medical guidance to promote healing, prevent infection, and ensure comfort during recovery.",
		icon: Bandage,
		color: "from-pink-500 to-rose-500",
		image: "/images/wound.avif",
	},
	{
		id: "monitoring-vitals",
		title: "Monitoring Vitals",
		description:
			"We regularly monitor vital signs to ensure early detection of health changes and provide timely medical attention when needed.",
		icon: BarChart,
		color: "from-purple-500 to-violet-500",
		image: "/images/vitals.avif",
	},
	{
		id: "bathing-grooming",
		title: "Bathing & Grooming",
		description:
			"We assist with personal hygiene in a respectful and dignified manner, ensuring your loved ones remain clean, comfortable, and confident.",
		icon: Bath,
		color: "from-teal-500 to-cyan-500",
		image: "/images/bathing.png",
	},
	{
		id: "elderly-care",
		title: "Elderly Home Care",
		description:
			"We provide gentle, compassionate care for the elderly, helping them live safely and comfortably at home while receiving companionship and daily support.",
		icon: Users,
		color: "from-indigo-500 to-blue-500",
		image: "/images/elderly.png",
	},
	{
		id: "medication-admin",
		title: "Medication Administration",
		description:
			"We ensure medications are taken correctly and on time, helping avoid missed doses and supporting safe, effective treatment at home.",
		icon: Pill,
		color: "from-yellow-500 to-orange-500",
		image: "/images/medication.png",
	},
	{
		id: "nursing-care",
		title: "Professional Nursing Care",
		description:
			"Our licensed nurses deliver skilled medical care at home, combining clinical expertise with compassion to support recovery and long-term health.",
		icon: Stethoscope,
		color: "from-emerald-500 to-teal-500",
		image: "/images/nursing.png",
	},
];
