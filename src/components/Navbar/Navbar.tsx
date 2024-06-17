import logo from "../Navbar/assets/CH-Logo.svg";
import dropDown from "../Navbar/assets/drop-down.svg";
import whiteLogo from "../Navbar/assets/CH-logo-white.svg";
// import dropDownHover from "../Navbar/assets/drop-down-hover.svg";
import {motion} from "framer-motion";
import xIcon from "../Navbar/assets/x-exit.svg";

function Navbar({showNav, setShowNav}) {
	return (
		<>
			<div className="fixed bg-transparant pt-[5vw] px-[5vw] pr-[10vw] md:p-10 md:px-20 w-screen flex items-center justify-between z-50">
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
			</div>
		</>
	);
}

export default Navbar;
