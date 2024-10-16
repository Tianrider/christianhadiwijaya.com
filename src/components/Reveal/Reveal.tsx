import {motion} from "framer-motion";

interface RevealProps {
	setReveal: React.Dispatch<React.SetStateAction<boolean>>;
	isLoading?: boolean; // Add isLoading prop to control the animation
}

const Reveal: React.FC<RevealProps> = ({setReveal, isLoading}) => {
	return (
		<motion.div
			className="fixed top-0 left-0 h-screen w-screen bg-black z-[100] opacity-100"
			initial={{y: 0}} // The screen starts fully covering the viewport
			animate={{y: isLoading ? 0 : "100%"}} // Only animate when isLoading becomes false
			transition={{duration: 0.5, delay: 0.2, ease: "easeInOut"}}
			onAnimationComplete={() => {
				if (!isLoading) setReveal(false); // Close only when isLoading is false
			}}
		></motion.div>
	);
};

export default Reveal;
