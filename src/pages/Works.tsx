import WorksImgLeft from "../components/Works/WorksImgLeft";
import WorksImgRight from "../components/Works/WorksImgRight";
import {motion} from "framer-motion";
import Reveal from "../components/Reveal/Reveal";
import {useState} from "react";

function Works() {
	const [reveal, setReveal] = useState(true);

	return (
		<div>
			{reveal && <Reveal setReveal={setReveal} />}

			<div className="flex flex-col font-bitter mb-44 h-full pt-[40vh] px-[6vw]">
				<motion.p
					className="font-bold text-black font-bitter text-[18dvw] md:text-[70px] leading-tight m-0 p-0"
					initial={{opacity: 0, x: 100}}
					animate={{opacity: 1, x: 0}}
					transition={{duration: 0.7, delay: 0.5}}
				>
					Works
				</motion.p>
				<motion.p
					className="text-black text-[6dvw] md:text-[30px] m-0 p-0 w-[90dw] md:w-[60vw] tracking-wider leading-9"
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{
						duration: 0.4,
						delay: 1,
						type: "spring",
						bounce: 0.5,
					}}
				>
					All of my personal or team works, ranging from school
					assignments to external projects.
				</motion.p>
			</div>

			<WorksImgLeft
				title="Nutritify"
				date="February 2024"
				img="https://th.bing.com/th/id/OIP.Dwx96HrXj8dVo9vhqEYHqQHaHa?rs=1&pid=ImgDetMain"
				description="my personal project utilizing Spotify API to showcase user listening data in a nutrition fact table style"
				link="https://nutritify.vercel.app/"
				github="github.com/tianrider"
				tech="React, TypeScript, TailwindCSS, Firebase"
			></WorksImgLeft>

			<WorksImgRight
				title="Nutritify"
				date="February 2024"
				img="https://th.bing.com/th/id/OIP.Dwx96HrXj8dVo9vhqEYHqQHaHa?rs=1&pid=ImgDetMain"
				description="my personal project utilizing Spotify API to showcase user listening data in a nutrition fact table style"
				link="https://nutritify.vercel.app/"
				github="github.com/tianrider"
				tech="React, TypeScript, TailwindCSS, Firebase"
			></WorksImgRight>

			<WorksImgLeft
				title="Nutritify"
				date="February 2024"
				img="https://th.bing.com/th/id/OIP.Dwx96HrXj8dVo9vhqEYHqQHaHa?rs=1&pid=ImgDetMain"
				description="my personal project utilizing Spotify API to showcase user listening data in a nutrition fact table style"
				link="https://nutritify.vercel.app/"
				github="github.com/tianrider"
				tech="React, TypeScript, TailwindCSS, Firebase"
			></WorksImgLeft>
		</div>
	);
}

export default Works;
