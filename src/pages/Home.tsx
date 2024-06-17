import MainPage from "../components/MainPage/MainPage";
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import Reveal from "../components/Reveal/Reveal";
import {useState} from "react";

function Home() {
	const [reveal, setReveal] = useState(true);

	return (
		<>
			{reveal && <Reveal setReveal={setReveal} />}

			<div>
				<MainPage />
				<Projects />
				<AboutMe />
			</div>
		</>
	);
}

export default Home;
