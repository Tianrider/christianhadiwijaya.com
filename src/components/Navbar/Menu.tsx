import React, {useEffect} from "react";
import {motion} from "framer-motion";
import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import hLogo from "./assets/H-logo.svg";
import cvIcon from "./assets/cv-icon.svg";

interface IconProps {
	id: string;
	component: React.ReactNode;
	delay: number;
	url?: string;
}

const iconData: IconProps[] = [
	{
		id: "instagram",
		component: (
			<FaInstagram className="h-full w-full text-center opacity-70 hover:opacity-100" />
		),
		delay: 0.4,
		url: "https://www.instagram.com/tianhd_",
	},
	{
		id: "github",
		component: (
			<FaGithub className="h-full w-full text-center opacity-70 hover:opacity-100" />
		),
		delay: 0.5,
		url: "https://www.github.com/Tianrider",
	},
	{
		id: "linkedin",
		component: (
			<FaLinkedin className="h-full w-full text-center opacity-70 hover:opacity-100" />
		),
		delay: 0.6,
		url: "https://www.linkedin.com/in/christianhadiwijaya",
	},
	{
		id: "email",
		component: (
			<MdEmail className="h-full w-full text-center opacity-70 hover:opacity-100" />
		),
		delay: 0.7,
		url: "mailto:hadiwijayachristian7@gmail.com",
	},
];

const SocialIcons: React.FC = () => {
	const itemVariants = {
		hidden: {x: "200%", opacity: 0},
		visible: {x: 0, opacity: 1},
	};

	return (
		<>
			{iconData.map((icon) => (
				<motion.div
					key={icon.id}
					className="bg-white cursor-pointer md:hover:bg-opacity-50 bg-opacity-30 p-2 rounded-lg h-14 w-14 md:h-14 md:w-14 flex items-center justify-center"
					variants={itemVariants}
					transition={{
						scale: {
							delay: 0,
							duration: 1,
							type: "spring",
							bounce: 0.75,
						},
						borderRadius: {
							delay: 0,
							duration: 0.5,
							type: "spring",
							bounce: 0.75,
						},
						duration: 0.5,
						delay: icon.delay,
						type: "spring",
						bounce: 0.6,
					}}
					whileHover={{
						scale: 1.1,
						borderRadius: "47%",
					}}
					onClick={() => window.open(icon.url, "_blank")}
				>
					{icon.component}
				</motion.div>
			))}
		</>
	);
};

const Menu: React.FC = () => {
	const containerVariants = {
		hidden: {opacity: 0, y: "-50%"},
		visible: {opacity: 1, y: 0},
	};

	const textVariants = {
		hidden: {opacity: 0, y: "-20%"},
		visible: {opacity: 1, y: 0},
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<motion.div
			className="fixed top-0 left-0 h-screen w-screen bg-black z-10 pl-4 md:pl-[5.3rem] flex justify-between pt-32 md:pt-48"
			initial="hidden"
			animate="visible"
			exit="exit"
			variants={containerVariants}
			transition={{duration: 0.4}}
		>
			<div className="h-full">
				<motion.div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-6 text-white">
					<motion.div
						className="w-20 md:w-40 h-[2px] bg-white opacity-[0.7]"
						variants={containerVariants}
						transition={{duration: 0.3, delay: 0.2}}
						exit={{opacity: 0, x: "-100%"}}
					/>
					<div className="flex flex-row gap-4">
						{/* <motion.div
							className="bg-white bg-opacity-30 p-3 rounded-lg h-14 w-14 md:h-14 md:w-14 md:hover:bg-opacity-50"
							variants={containerVariants}
							transition={{
								scale: {
									delay: 0,
									duration: 1,
									type: "spring",
									bounce: 0.75,
								},
								borderRadius: {
									delay: 0,
									duration: 0.5,
									type: "spring",
									bounce: 0.75,
								},
								duration: 0.5,
								delay: 0.3,
								type: "spring",
								bounce: 0.6,
							}}
							whileHover={{
								scale: 1.1,
								borderRadius: "47%",
							}}
						>
							<img
								src={cvIcon}
								alt=""
								className="h-full aspect-square opacity-70 hover:opacity-100"
							/>
						</motion.div> */}
						<SocialIcons />
					</div>
				</motion.div>

				<div className="flex flex-col justify-start items-start font-bitter mt-16 text-white font-medium text-[70px] gap-5 md:gap-9 w-full">
					<motion.a
						href="/"
						className="text-gray-400 hover:text-white hover:tracking-wide"
						variants={textVariants}
						transition={{duration: 0.3, delay: 0.8}}
					>
						Home
					</motion.a>
					<motion.a
						href="/works"
						className="text-gray-400 hover:text-white hover:tracking-wide"
						variants={textVariants}
						transition={{duration: 0.3, delay: 1}}
					>
						Works
					</motion.a>
					<motion.a
						href="/gallery"
						className="text-gray-400 hover:text-white hover:tracking-wide"
						variants={textVariants}
						transition={{duration: 0.3, delay: 1.1}}
					>
						Gallery
					</motion.a>
				</div>
			</div>

			<motion.div
				className="md:flex items-center justify-end relative hidden"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 1, delay: 1}}
			>
				<img
					src={hLogo}
					alt=""
					className="w-[90%] h-[90%] mb-20 pr-10"
				/>
			</motion.div>
		</motion.div>
	);
};

export default Menu;
