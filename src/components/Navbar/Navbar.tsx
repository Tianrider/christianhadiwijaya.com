import logo from "../Navbar/assets/CH-Logo.svg";
import dropDown from "../Navbar/assets/drop-down.svg";
import whiteLogo from "../Navbar/assets/CH-logo-white.svg";
// import dropDownHover from "../Navbar/assets/drop-down-hover.svg";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import xIcon from "../Navbar/assets/x-exit.svg";
import {useState} from "react";

interface NavbarProps {
	showNav: boolean;
	setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({showNav, setShowNav}: NavbarProps) {
	const {scrollY} = useScroll();
	const [isHidden, setHidden] = useState(false);
	const [topOfScreen, setTopOfScreen] = useState(true);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (previous ? latest > previous : false) {
			setHidden(true);
		} else {
			setHidden(false);
		}

		if (latest > 0) {
			setTopOfScreen(false);
		} else {
			setTopOfScreen(true);
		}
	});

	return (
		<>
			<motion.div
				className={`fixed ${
					topOfScreen
						? "bg-transparent  md:p-10"
						: "bg-white py-1 md:pt-0 shadow-md"
				}
					${
						showNav ? "bg-transparent" : "bg-white"
					} pt-[5vw] px-[5vw] pr-[10vw] md:px-20 w-screen flex items-center justify-between z-50`}
				variants={{
					visible: {y: 0},
					hidden: {y: "-100%"},
				}}
				animate={isHidden ? "hidden" : "visible"}
				transition={{duration: 0.3, ease: "easeInOut"}}
			>
				<a href="/">
					<motion.img
						src={showNav ? whiteLogo : logo}
						className="h-20 md:h-24"
						alt="Logo"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{duration: 1}}
					/>
				</a>

				{!showNav && (
					<img
						src={showNav ? dropDown : dropDown}
						alt=""
						className="h-12 md:h-14 cursor-pointer"
						onClick={() => setShowNav((prevState) => !prevState)}
					/>
				)}

				{showNav && (
					<img
						src={xIcon}
						alt=""
						className="h-8 md:h-10 cursor-pointer"
						onClick={() => setShowNav((prevState) => !prevState)}
					/>
				)}
			</motion.div>
		</>
	);
}

export default Navbar;
