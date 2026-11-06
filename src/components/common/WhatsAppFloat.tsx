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
                fixed bottom-20 md:bottom-6 right-6 z-[100]
                w-14 h-14 md:w-16 md:h-16 rounded-full
                bg-green-500 hover:bg-green-600
                text-white shadow-2xl
                flex items-center justify-center
                transition-all duration-300
            "
			aria-label="Chat with us on WhatsApp"
		>
			<FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
		</motion.a>
	);
};

export default WhatsAppFloat;
