import {motion} from "framer-motion";

function mainPage() {
	return (
		<div className="bg-white h-[100vh] md:h-screen flex flex-col justify-end">
			<motion.div
				className="textbox ml-[8dvw] mb-[25vh] md:ml-20 md:mb-60 absolute w-screen md:w-1/2"
				initial={{opacity: 0, y: 30}}
				animate={{opacity: 1, y: 0}}
				transition={{duration: 1, delay: 0.7}}
			>
				<p className="font-bold text-black font-bitter text-[10dvw] md:text-[80px] m-0 p-0">
					Christian
				</p>
				<p className="font-bold text-black font-bitter text-[10dvw] md:text-[80px] absolute top-[10dvw] md:top-20">
					Hadiwijaya
				</p>
				<motion.p
					className="absolute top-[25dvw] md:top-48 text-black font-bitter text-[4dvw] md:text-[35px] "
					initial={{opacity: 0}} // Optional: Initial state for <motion.p>
					animate={{opacity: 1}} // Animation state for <motion.p>
					transition={{duration: 1, delay: 1.5}} // Delay added here (0.5 seconds)
				>
					Full Stack Developer | Jakarta, Indonesia
				</motion.p>
			</motion.div>
			<motion.div
				className="static"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 2, delay: 1.5}}
			>
				<p className="absolute bottom-40 left-[87.3dvw] text-center font-bitter text-gray-400 opacity-700 tracking-[4px] md:block hidden hover:scale-105">
					SCROLL
				</p>
				<div className="w-[2px] h-[40dvh] bg-gray-400 opacity-70 absolute left-[50vw] -bottom-[33vh] md:-bottom-[21dvh] md:left-[90dvw] md:block hidden">
					{" "}
				</div>
			</motion.div>
		</div>
	);
}

export default mainPage;
