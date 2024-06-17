import {useEffect} from "react";
import {motion} from "framer-motion";
import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import hLogo from "./assets/H-logo.svg";
import cvIcon from "./assets/cv-icon.svg";

function Menu() {
	// Animation variants
	const containerVariants = {
		hidden: {opacity: 0, y: "-50%"},
		visible: {opacity: 1, y: 0},
	};

	const itemVariants = {
		hidden: {x: "200%", opacity: 0},
		visible: {x: 0, opacity: 1},
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
						variants={itemVariants}
						transition={{duration: 0.3, delay: 0.2}}
						exit={{opacity: 0, x: "-100%"}}
					></motion.div>
					<motion.div className="flex gap-3 md:gap-4">
						<motion.div
							className=""
							variants={itemVariants}
							transition={{
								duration: 0.5,
								delay: 0.3,
								type: "spring",
								bounce: 0.6,
							}}
						>
							<img
								src={cvIcon}
								alt=""
								className="h-9 md:h-10 opacity-70 hover:opacity-100"
							/>
						</motion.div>
						<motion.div
							variants={itemVariants}
							transition={{
								duration: 0.5,
								delay: 0.4,
								type: "spring",
								bounce: 0.6,
							}}
						>
							<FaInstagram className="h-9 w-9 md:h-10 md:w-10 opacity-70 hover:opacity-100" />
						</motion.div>
						<motion.div
							variants={itemVariants}
							transition={{
								duration: 0.5,
								delay: 0.5,
								type: "spring",
								bounce: 0.6,
							}}
						>
							<FaGithub className="h-9 w-9 md:h-10 md:w-10 opacity-70 hover:opacity-100" />
						</motion.div>
						<motion.div
							variants={itemVariants}
							transition={{
								duration: 0.5,
								delay: 0.6,
								type: "spring",
								bounce: 0.6,
							}}
						>
							<FaLinkedin className="h-9 w-9 md:h-10 md:w-10 opacity-70 hover:opacity-100" />
						</motion.div>
						<motion.div
							variants={itemVariants}
							transition={{
								duration: 0.5,
								delay: 0.7,
								type: "spring",
								bounce: 0.6,
							}}
						>
							<MdEmail className="h-9 w-9 md:h-10 md:w-10 opacity-70 hover:opacity-100" />
						</motion.div>
					</motion.div>
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
}

export default Menu;
