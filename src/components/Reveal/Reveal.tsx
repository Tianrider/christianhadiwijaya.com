import {motion} from "framer-motion";

interface RevealProps {
	setReveal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Reveal: React.FC<RevealProps> = ({setReveal}) => {
	return (
		<motion.div
			className="fixed top-0 left-0 h-screen w-screen bg-black z-10 opacity-100"
			initial={{y: 0}}
			animate={{y: "100%"}}
			transition={{duration: 0.5, delay: 0.2, ease: "easeInOut"}}
			onAnimationComplete={() => setReveal(false)}
		></motion.div>
	);
};

export default Reveal;
