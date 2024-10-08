import {MdOpenInNew} from "react-icons/md";
import {FaGithub} from "react-icons/fa";
import {motion} from "framer-motion";

interface WorksImgLeftProps {
	title: string;
	date: string;
	img: string;
	description: string;
	link?: string;
	github?: string;
	tech?: string;
	leftImage: boolean;
}

const WorksImgLeft: React.FC<WorksImgLeftProps> = ({
	title,
	date,
	img,
	description,
	link,
	github,
	tech,
	leftImage,
}) => {
	return (
		<motion.div
			className={`flex flex-col 
				 ${leftImage ? "md:flex-row" : "md:flex-row-reverse"} justify-between
				 items-center px-5 md:px-[10vw] my-20 md:my-32 md:mb-40 h-full md:h-[260px] w-full font-bitter`}
			initial={{opacity: 0, x: leftImage ? 100 : -100}}
			whileInView={{opacity: 1, x: 0}}
			viewport={{margin: "-20%", once: true}}
			transition={{duration: 0.5, type: "spring", bounce: 0.5}}
		>
			<img
				src={img}
				alt=""
				className="md:w-[550px] aspect-video rounded-md"
			/>
			<div
				className={`flex flex-col justify-center gap-2 md:gap-5 items-start h-full w-full mt-3 md:mt-0 ${
					leftImage ? "md:ml-40" : "md:mr-40"
				}`}
			>
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
					{link && (
						<a href={link} target="_blank">
							<motion.div
								className="text-white bg-black bg-opacity-90 flex gap-5 justify-start items-center p-2 md:p-3"
								initial={{borderRadius: "10%"}}
								transition={{
									scale: {
										delay: 0,
										duration: 1,
										type: "spring",
										bounce: 0.6,
									},
									borderRadius: {
										delay: 0,
										duration: 1,
										type: "spring",
										bounce: 0.75,
									},
								}}
								whileHover={{
									scale: 1.1,
									borderRadius: "47%",
									transition: {delay: 0},
								}}
							>
								<MdOpenInNew className="inline-block text-4xl" />
							</motion.div>
						</a>
					)}

					{github && (
						<a href={github} target="_blank">
							<motion.div
								className="text-white bg-black bg-opacity-70 flex gap-5 justify-start items-center p-2 md:p-3"
								initial={{borderRadius: "10%"}}
								transition={{
									scale: {
										delay: 0,
										duration: 1,
										type: "spring",
										bounce: 0.6,
									},
									borderRadius: {
										delay: 0,
										duration: 1,
										type: "spring",
										bounce: 0.75,
									},
								}}
								whileHover={{
									scale: 1.1,
									borderRadius: "47%",
									transition: {delay: 0},
								}}
							>
								<FaGithub className="inline-block text-4xl" />
							</motion.div>
						</a>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default WorksImgLeft;
