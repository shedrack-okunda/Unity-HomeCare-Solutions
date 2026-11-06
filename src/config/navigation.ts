import {
	Home,
	Mail,
	MessageSquareQuote,
	Stethoscope,
	User,
	type LucideIcon,
} from "lucide-react";

export interface NavLink {
	path: string;
	name: string;
	icon: LucideIcon;
}

export const NavLinks = [
	{ path: "/", name: "Home", icon: Home },
	{ path: "/about", name: "About", icon: User },
	{ path: "/services", name: "Services", icon: Stethoscope },
	{ path: "/testimonials", name: "Testimonials", icon: MessageSquareQuote },
	{ path: "/contact", name: "Contact", icon: Mail },
];
