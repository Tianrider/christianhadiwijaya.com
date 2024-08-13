import React, {useState} from "react";
import imageList from "../data/galleryData";
import Reveal from "../components/Reveal/Reveal";

const Gallery: React.FC = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [reveal, setReveal] = useState(true);

	return (
		<div>
			{reveal && <Reveal setReveal={setReveal} />}
			<div className="columns-4 gap-4 space-y-3 p-[2vw] pb-10 pt-[15vh] md:pt-[23vh] md:p-20">
				{imageList.map((image) => (
					<img
						className="h-auto max-w-full rounded-lg md:hover:shadow-xl transition-transform ease-out "
						src={image.src}
						alt={image.alt}
						onClick={() => setSelectedImage(image.src)}
					/>
				))}
			</div>

			{selectedImage && (
				<div
					className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center p-3 md:p-0"
					onClick={() => setSelectedImage(null)}
				>
					<img
						src={selectedImage}
						alt=""
						className="h-auto max-h-screen max-w-full rounded-lg"
					/>
				</div>
			)}
		</div>
	);
};

export default Gallery;
