import profilePicture from "../AboutMe/assets/ProfilePicture.jpg";

function aboutMe() {
	return (
		<div className="flex flex-col items-center justify-center md:items-end md:justify-end bg-white px-[8vw] md:px-20 pb-40 font-bitter relative">
			<div className="w-[2px] h-[40dvh] bg-gray-400 opacity-70 absolute md:-top-[10dvh] md:right-[90dvw] md:block hidden">
				{" "}
			</div>

			<div className="w-[2px] h-[15dvh] bg-gray-400 opacity-70 absolute md:bottom-[0dvh] md:right-[80dvw] md:block hidden">
				{" "}
			</div>

			<h1 className="pt-32 text-[10dvw] md:text-[50px] font-bold opacity-[0.77]">
				About Me?
			</h1>
			<div className="mt-12 h-full w-full flex flex-col-reverse items-center md:items-stretch md:flex-row md:justify-end">
				<div className="flex flex-col md:items-end md:justify-between h-parent md:gap-0 gap-10">
					<div>
						<h1 className="text-[5vw] w-[60vw] md:w-full md:text-[30px] font-bold opacity-[0.77]">
							Computer Engineering | University of Indonesia
						</h1>
						<div className="md:text-end flex flex-col md:flex-row md:gap-4 md:items-center md:justify-end">
							<p className="font-sans opacity-[0.66] text-xl pt-[2px]">
								2023 - 2027
							</p>
							<p className="text-2xl">undergraduate student</p>
						</div>
					</div>

					<div>
						<h1 className="text-[5vw] w-[60vw] md:w-full md:text-[30px] font-bold opacity-[0.77]">
							Digital Laboratory DTE UI
						</h1>
						<div className="md:text-end flex flex-col md:flex-row md:gap-4 md:items-center md:justify-end">
							<p className="font-sans opacity-[0.66] text-xl pt-[2px]">
								2024 - Present
							</p>
							<p className="text-2xl">Lab Asisstant</p>
						</div>
					</div>

					<div>
						<h1 className="md:text-end text-[5vw] w-[60vw] md:w-full md:text-[30px] font-bold opacity-[0.77]">
							Exercise FTUI
						</h1>
						<div className="flex flex-col md:flex-row md:gap-4 md:items-center md:justify-end">
							<p className="font-sans opacity-[0.66] text-xl pt-[2px]">
								2024 - Present
							</p>
							<p className="text-2xl">
								Software Development Staff
							</p>
						</div>
					</div>
				</div>

				<div className="flex justify-start items-center w-10 mx-3">
					<div className="w-[1px] h-[65%] bg-gray-400 opacity-70">
						{" "}
					</div>
				</div>

				<img
					src={profilePicture}
					alt=""
					className="h-80 aspect-auto md:mb-0 mb-5 rounded-md shadow-md"
				/>
			</div>
		</div>
	);
}

export default aboutMe;
