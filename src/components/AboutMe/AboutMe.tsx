import {Briefcase, GraduationCap} from "lucide-react";
import profilePicture from "../AboutMe/assets/profile-new.jpg";

interface EducationList {
	school: string;
	degree: string;
	year: string;
}

interface ExperienceList {
	company: string;
	position: string;
	year: string;
	description: string[];
}

const educationList: EducationList[] = [
	{
		school: "Univesity of Indonesia",
		degree: "Bachelor Degree in Computer Engineering",
		year: "2023 - 2027",
	},
	{
		school: "SMAN 55 Jakarta",
		degree: "Science",
		year: "2020 - 2023",
	},
];

const experienceList: ExperienceList[] = [
	{
		company: "Digital Laboratory DTE UI",
		position: "Lab Assistant",
		year: "2024 - Present",
		description: [
			"Assist students in their lab work",
			"Maintain lab equipment",
			"Develop lab modules",
		],
	},
	{
		company: "Exercise FTUI",
		position: "Software Development Staff",
		year: "2024 - Present",
		description: [
			"Develop software for FTUI",
			"Maintain software",
			"Develop software documentation",
		],
	},
	{
		company: "Hyundai Jump School Indonesia",
		position: "Student Volunteer",
		year: "2024 - Present",
		description: [
			"Teach students about programming",
			"Develop programming modules",
			"Develop programming exercises",
		],
	},
];

function aboutMe() {
	return (
		<div className="flex flex-col gap-8 items-center justify-center md:items-end md:justify-end bg-white px-[8vw] md:px-20 pb-40 font-bitter relative">
			<h1 className="pt-32 text-[10dvw] md:text-[50px] font-bold opacity-[0.77]">
				About Me?
			</h1>

			<div className="flex w-full h-full">
				<div className="min-h-64 h-auto w-full flex flex-col md:flex-row gap-8 md:gap-12">
					<img
						src={profilePicture}
						className="rounded-md shadow-md w-full md:max-w-[30%] object-cover h-72 md:h-full"
					></img>
					<div className="p-4 flex-row border-gray-300 border-2 rounded-md w-full h-full">
						<div className="flex gap-2 h-4">
							<GraduationCap size={32} />
							<h1 className="font-bold text-3xl">Education</h1>
						</div>

						<div className="flex flex-col gap-4 md:mt-0 mt-2 h-full justify-center">
							{educationList.map((data) => (
								<Education key={data.school} {...data} />
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="h-auto min-h-80 rounded-md border-gray-300 border-2 p-4 w-full">
				<div className="flex gap-2 h-auto">
					<Briefcase size={32} />
					<h1 className="font-bold text-3xl">Experience</h1>
				</div>

				<div className="flex flex-col mt-4 gap-4 h-full justify-center">
					{experienceList.map((data) => (
						<Experience key={data.company} {...data} />
					))}
				</div>
			</div>
			{/*
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
			</div> */}
		</div>
	);
}

const Education = (data: EducationList) => {
	return (
		<div>
			<h1 className="font-bold text-2xl">{data.degree}</h1>
			<p>{data.school}</p>
			<p>{data.year}</p>
		</div>
	);
};

const Experience = (data: ExperienceList) => {
	return (
		<div>
			<h1 className="font-bold text-xl">{data.position}</h1>
			<p className="italic">{data.company}</p>
			<p>{data.year}</p>
		</div>
	);
};

export default aboutMe;
