import { Clock, Heart, Shield, Star, Users } from "lucide-react";

export const LEFT_CARDS = [
	{
		icon: Users,
		title: "Certified Caregivers & Nurses",
		desc: "Certified healthcare providers with years of experience",
		classes: "bg-blue-50 dark:bg-gray-800 border-blue-100 dark:border-gray-700",
		iconColor: "text-blue-600",
	},
	{
		icon: Clock,
		title: "Always Available Support",
		desc: "Care and assistance whenever your family needs it — day or night",
		classes:
			"bg-purple-50 dark:bg-gray-800 border-purple-100 dark:border-gray-700",
		iconColor: "text-purple-600",
	},
];

export const RIGHT_CARDS = [
	{
		icon: Shield,
		title: "Safety First",
		classes:
			"bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 border-green-200 dark:border-green-700 sm:mt-8",
		iconColor: "text-green-600 dark:text-green-300",
	},
	{
		icon: Star,
		title: "Quality Assured",
		classes:
			"bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 border-orange-200 dark:border-orange-700 sm:mt-4",
		iconColor: "text-orange-600 dark:text-orange-300",
	},
	{
		icon: Heart,
		title: "Compassionate Care",
		classes:
			"bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border-blue-200 dark:border-blue-700",
		iconColor: "text-blue-600 dark:text-blue-300",
	},
	{
		icon: Users,
		title: "Family Focused",
		classes:
			"bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 border-purple-200 dark:border-purple-700 sm:-mt-4",
		iconColor: "text-purple-600 dark:text-purple-300",
	},
];
