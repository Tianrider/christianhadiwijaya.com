import {useState, useRef} from "react";
import WorksImgLeft from "../components/Works/WorksImg";
import worksData from "../data/projectData";
import {motion} from "framer-motion";
import Reveal from "../components/Reveal/Reveal";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

function Works() {
	const [reveal, setReveal] = useState(true);
	const [selected, setSelected] = useState(0);

	// Get selected works length
	const selectedLength = worksData.length;

	// Ref for the top of works section
	const topOfWorksRef = useRef<HTMLDivElement>(null);

	// Function to scroll to the top of the works section
	const scrollToTop = () => {
		if (topOfWorksRef.current) {
			window.scrollTo({
				top: topOfWorksRef.current.offsetTop - 200, // Adjust the offset as needed
				behavior: "smooth",
			});
		}
	};

	const handleLeftClick = () => {
		if (selected > 0) {
			setSelected(selected - 1);
			scrollToTop();
		}
	};

	const handleRightClick = () => {
		if (selected < selectedLength - 1) {
			setSelected(selected + 1);
			scrollToTop();
		}
	};

	const handleSelect = (index: number) => {
		setSelected(index);
		scrollToTop();
	};

	return (
		<div className="mb-20">
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

			<div id="top-of-works" ref={topOfWorksRef}></div>

			{worksData[selected].data.map((work, index) => (
				<WorksImgLeft
					key={index}
					title={work.title}
					date={work.date}
					img={work.img}
					description={work.description}
					link={work.link}
					github={work.github}
					tech={work.tech}
					leftImage={index % 2 === 0}
				/>
			))}

			<div className="flex text-black text-3xl items-center justify-center gap-2 font-bitter font-bold">
				<FaArrowLeft
					className={`mx-3 ${
						selected === 0
							? "opacity-30 cursor-default"
							: "opacity-100 cursor-pointer"
					}`}
					onClick={handleLeftClick}
				/>

				{Array.from({length: selectedLength}, (_, i) => (
					<div
						key={i}
						className={`p-3 px-5 cursor-pointer hover:bg-gray-200 hover:bg-opacity-50 rounded-lg 
                            ${
								i === selected &&
								`bg-black bg-opacity-20 rounded-lg`
							}`}
						onClick={() => handleSelect(i)}
					>
						{i + 1}
					</div>
				))}

				<FaArrowRight
					className={`mx-3 ${
						selected === selectedLength - 1
							? "opacity-30 cursor-default"
							: "opacity-100 cursor-pointer"
					}`}
					onClick={handleRightClick}
				/>
			</div>
		</div>
	);
}

export default Works;
