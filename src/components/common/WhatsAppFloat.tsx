import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
	return (
		<motion.a
			href="https://wa.me/254703919412"
			target="_blank"
			rel="noopener noreferrer"
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: "spring", stiffness: 260, damping: 20 }}
			className="
				fixed bottom-6 right-6 z-[100]
				w-16 h-16 rounded-full
				bg-green-500 hover:bg-green-600
				text-white shadow-2xl
				flex items-center justify-center
				transition-all duration-300
			"
			aria-label="Chat with us on WhatsApp">
			<FaWhatsapp className="w-8 h-8" />
		</motion.a>
	);
};

export default WhatsAppFloat;
