import Swiper from "./Swiper";
import {FaArrowRight} from "react-icons/fa";
import {motion} from "framer-motion";

function projects() {
	return (
		<div className="h-full bg-white font-bitter">
			<div className="flex flex-col justify-center items-center">
				<motion.h1
					className="pt-52 text-[10dvw] md:text-[45px] font-bold opacity-[0.77]"
					initial={{opacity: 0, y: -50}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{margin: "-50%", once: true}}
					transition={{duration: 0.5}}
				>
					Selected Works
				</motion.h1>
				<Swiper />
				<motion.a
					className="font-bold mt-[4vh] mb-[10vh] text-xl cursor-pointer flex flex-row items-center justify-center hover:underline transition-all duration-300 ease-linear hover:bg-black hover:bg-opacity-10 hover:text-black p-2 rounded-md"
					initial={{opacity: 0, x: -50}}
					whileInView={{opacity: 1, x: 0}}
					viewport={{margin: "-20%", once: true}}
					transition={{duration: 0.3}}
					href="/works"
				>
					<p> show all projects</p>
					<FaArrowRight className="ml-1 text-sm" />
				</motion.a>
			</div>
		</div>
	);
}

export default projects;
