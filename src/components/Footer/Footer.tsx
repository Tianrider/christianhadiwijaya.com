import {IoCopySharp} from "react-icons/io5";
import logo from "../Footer/assets/C-logo.svg";
import {useState, useEffect} from "react";

function Footer() {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied) {
			setTimeout(() => {
				setCopied(false);
			}, 2000);
		}
	}, [copied]);

	const handleOnCopy = () => {
		navigator.clipboard.writeText("hadiwijayachristian7@gmail.com");
		setCopied(true);
	};

	return (
		<div className="h-full md:h-[90dvh] w-screen md:w-full bg-black flex justify-between flex-col text-white font-bitter">
			<div className="flex-row flex justify-between mt-[10dvw] mx-[5dvw] md:pt-28 md:mt-0 md:mx-0 md:pl-24 md:pr-10">
				<div className="flex-col flex">
					<div>
						<p className="text-[8dvw] md:text-[60px] ">
							Want to know me more?
						</p>
						<p className="text-[8dvw] md:text-[60px] ">
							Connect with me
						</p>
					</div>

					<div>
						<p className="text-[25px] mt-[4dvw] md:mt-10 font-sans">
							Email
						</p>
						<div className="flex md:items-center mt-[2dvw] md:mt-4 flex-col md:flex-row">
							<p className="text-[5dvw] md:text-[27px] font-bold font-sans">
								hadiwijayachristian7@gmail.com
							</p>
							<div
								className="md:flex flex-row items-center mt-2 md:mt-0 md:hover:scale-105 cursor-pointer relative hidden"
								onClick={handleOnCopy}
							>
								<IoCopySharp className="md:ml-10 text-[30px]" />
								{copied && (
									<p className="absolute top-10 md:-top-10 left-10">
										Copied!
									</p>
								)}
								<p className="ml-4 font-sans">
									Copy to Clipboard
								</p>
							</div>
						</div>
						<p className="text-[25px] mt-[9dvw] md:mt-14 font-sans">
							Social
						</p>
						<div className="flex flex-row gap-[12dvw] md:gap-14 font-sans font-bold mt-[2dvw] md:mt-4 text-[5dvw] md:text-[25px]">
							<a
								className="cursor-pointer hover:underline"
								href="https://www.linkedin.com/in/christianhadiwijaya/"
								target="_blank"
							>
								Linkedin
							</a>
							<a
								className="cursor-pointer hover:underline"
								href="https://www.github.com/Tianrider"
								target="_blank"
							>
								GitHub
							</a>
							<a
								className="cursor-pointer hover:underline"
								href="https://www.instagram.com/tianhd_"
								target="_blank"
							>
								Instagram
							</a>
						</div>
					</div>
				</div>

				<div className="hidden md:contents">
					<img src={logo} alt="" />
				</div>
			</div>

			<div className="items-center flex justify-center mb-5 mt-10 md:mt-0">
				Copyright © 2024 Christian Hadiwijaya
			</div>
		</div>
	);
}

export default Footer;
