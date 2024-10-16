import {useState, useEffect, useRef} from "react";
import WorksImgLeft from "../components/Works/WorksImg";
import {motion} from "framer-motion";
import Reveal from "../components/Reveal/Reveal";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {firestore} from "../utils/firebase";
import {collection, query, orderBy, getDocs} from "firebase/firestore";

interface Project {
	title: string;
	date: string;
	img: string;
	description: string;
	link?: string;
	github?: string;
	tech?: string;
}

interface ProjectList {
	data: Project[];
}

interface Work {
	title: string;
	date: string;
	img: string;
	description: string;
	link?: string;
	github?: string;
	tech?: string;
}

function Works() {
	const [reveal, setReveal] = useState(true);
	const [works, setWorks] = useState<Work[]>([]);
	const [selected, setSelected] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

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

	const fetchWorks = async () => {
		const worksRef = collection(firestore, "projects"); // Replace "works" with your Firestore collection name
		const q = query(worksRef, orderBy("date", "asc"));

		const querySnapshot = await getDocs(q);

		const worksData: Project[] = [];
		querySnapshot.forEach((doc) => {
			console.log(doc.data());
			const data = doc.data();
			worksData.push({
				title: data.title,
				date: data.date,
				img: data.img,
				description: data.description,
				link: data.link,
				github: data.github,
				tech: data.tech,
			});
		});

		// Group the works into arrays of 3
		const groupedWorks: ProjectList[] = [];
		for (let i = 0; i < worksData.length; i += 3) {
			groupedWorks.push({
				data: worksData.slice(i, i + 3),
			});
		}

		console.log(groupedWorks);
		setWorks(groupedWorks.flatMap((group) => group.data));
		setIsLoading(false);

		return groupedWorks;
	};

	useEffect(() => {
		fetchWorks();
	}, []);

	const handleLeftClick = () => {
		if (selected > 0) {
			setSelected(selected - 1);
			scrollToTop();
		}
	};

	const handleRightClick = () => {
		if (selected < works.length - 1) {
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
			{reveal && <Reveal setReveal={setReveal} isLoading={isLoading} />}

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

			{works.slice(selected * 3, selected * 3 + 3).map((work, index) => (
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

				{Array.from({length: Math.ceil(works.length / 3)}, (_, i) => (
					<div
						key={i}
						className={`p-3 px-5 cursor-pointer hover:bg-gray-200 hover:bg-opacity-50 rounded-lg ${
							i === selected &&
							`bg-black bg-opacity-20 rounded-lg`
						}`}
						onClick={() => handleSelect(i * 3)}
					>
						{i + 1}
					</div>
				))}

				<FaArrowRight
					className={`mx-3 ${
						selected >= works.length - 3
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
