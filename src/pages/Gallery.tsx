import React, {useEffect, useState} from "react";
import Reveal from "../components/Reveal/Reveal";
import {getDownloadURL, listAll, ref} from "firebase/storage";
import {storage} from "../utils/firebase";

// Define the type for image objects
interface Image {
	src: string;
	alt: string;
}

const Gallery: React.FC = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [reveal, setReveal] = useState(true);
	// Initialize state with an empty array of type Image
	const [imageList, setImageList] = useState<Image[]>([]);

	useEffect(() => {
		const fetchImages = async () => {
			const imagesRef = ref(storage, "gallery/");

			try {
				// Fetch all items (images) in the 'gallery' folder
				const result = await listAll(imagesRef);

				// Map each image reference to an object with src and alt properties
				const images = await Promise.all(
					result.items.map(async (imageRef) => {
						const url = await getDownloadURL(imageRef);
						// Use the file name (without extension) as the alt text
						const alt = imageRef.name.split(".")[0];
						return {src: url, alt};
					})
				);

				// Update the state with the fetched images
				setImageList(images);
				console.log(images);
			} catch (error) {
				console.error("Error fetching images:", error);
			}
		};

		fetchImages();
	}, []);

	return (
		<div>
			{reveal && <Reveal setReveal={setReveal} />}
			<div className="columns-4 gap-4 space-y-3 p-[2vw] pb-10 pt-[15vh] md:pt-[23vh] md:p-20">
				{imageList.map((image, index) => (
					<img
						key={index}
						className="h-auto max-w-full rounded-lg md:hover:shadow-xl transition-transform ease-out"
						src={image.src}
						alt={image.alt}
						onClick={() => setSelectedImage(image.src)}
					/>
				))}
			</div>

			{selectedImage && (
				<div
					className="fixed top-0 left-0 w-full h-full z-[100] bg-black bg-opacity-80 flex items-center justify-center p-3 md:p-0"
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
