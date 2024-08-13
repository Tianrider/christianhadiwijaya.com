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

const projectList: ProjectList[] = [
	{
		data: [
			{
				title: "Nutritify",
				date: "February 2024",
				img: "https://res.cloudinary.com/djvdforcq/image/upload/v1718636038/Screenshot_17-6-2024_215346_nutritify.vercel.app_f6hnqx.jpg",
				description:
					"my personal project utilizing Spotify API to showcase user listening data in a nutrition fact table style",
				link: "https://nutritify.vercel.app/",
				github: "https://github.com/tianrider/nutritify",
				tech: "React",
			},
			{
				title: "MIPA Open House",
				date: "Aug 2024",
				img: "https://res.cloudinary.com/djvdforcq/image/upload/v1723537700/Projects/ufsw0bsmrzoaeyvyyhpr.png",
				description:
					"Event website that showcases details about the FMIPA UI 2024 Open House, including the event details and the faculty and its departments, while also functions as a payment platform for participants.",
				tech: "React",
				link: "https://mipaopenhouse.com",
			},
			{
				title: "EZRA",
				date: "June 2024",
				img: "https://res.cloudinary.com/djvdforcq/image/upload/v1718637173/Copy_of_drop-down_1_odyhby.png",
				description:
					"EZRA (EZ Emergency Assistant) is a iot project that helps people with disabilities to call for help in MRT stations when they are in danger or need help.",
				tech: "Node.js, Express.js, Mongoose",
				github: "https://github.com/Tianrider/mrt-location_be",
			},
		],
	},
	{
		data: [
			{
				title: "Cupid's Click",
				date: "March 2024",
				img: "https://res.cloudinary.com/djvdforcq/image/upload/v1718637279/Screenshot_2024-06-17_221416_nht4by.png",
				description:
					"A fun project me and my team do for Exercise FTUI 2024. It's a simple visual novel app built with react",
				github: "https://github.com/tianrider/Cupids_Click",
			},
			{
				title: "Slither.io in C",
				date: "May 2024",
				img: "https://res.cloudinary.com/djvdforcq/image/upload/v1718637853/Copy_of_drop-down_2_muokqd.png",
				description:
					"A final project for my C programming class. It's a simple Slither.io that runs from the terminal",
				github: "https://github.com/Tianrider/Slither.IO-in-C",
				tech: "C",
			},
		],
	},
];

export default projectList;
