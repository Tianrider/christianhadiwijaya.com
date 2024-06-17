import {MdOpenInNew} from "react-icons/md";
import {FaGithub} from "react-icons/fa";
import {motion} from "framer-motion";

interface WorksImgLeftProps {
	title: string;
	date: string;
	img: string;
	description: string;
	link: string;
	github: string;
	tech: string;
}

const WorksImgLeft: React.FC<WorksImgLeftProps> = ({
	title,
	date,
	img,
	description,
	link,
	github,
	tech,
}) => {
	return (
		<motion.div
			className="flex flex-col md:flex-row justify-between items-center px-5 md:px-[10vw] my-20 md:my-32 md:mb-40 h-full md:h-[260px] w-full font-bitter"
			initial={{opacity: 0, x: 100}}
			whileInView={{opacity: 1, x: 0}}
			viewport={{margin: "-20%", once: true}}
			transition={{duration: 0.5, type: "spring", bounce: 0.5}}
		>
			<img
				src={img}
				alt=""
				className=" md:w-[550px] aspect-video rounded-md"
			/>
			<div className="flex flex-col justify-center gap-2 md:gap-5 items-start h-full w-full mt-3 md:mt-0 md:ml-40">
				<div className="flex justify-between items-center w-full">
					{" "}
					<h1 className="text-3xl font-bold">{title}</h1>
					<p className="md:text-xl font-bold">{date}</p>
				</div>
				<p className="text-black text-20 md:text-[20px] tracking-wider md:leading-9 font-medium">
					{description}
				</p>
				<p className="text-gray-500">{tech}</p>
				<div className="flex flex-row justify-start items-center gap-5">
					<a href={link}>
						<div className="text-white bg-black bg-opacity-90 rounded-md hover:bg-opacity-100 flex gap-5 justify-start items-center p-2 md:p-3">
							<MdOpenInNew className="inline-block text-4xl" />
						</div>
					</a>
					<a href={github}>
						<div className="text-white bg-black bg-opacity-70 rounded-md hover:bg-opacity-100 flex gap-5 justify-start items-center p-2 md:p-3">
							<FaGithub className="inline-block text-4xl" />
						</div>
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default WorksImgLeft;
