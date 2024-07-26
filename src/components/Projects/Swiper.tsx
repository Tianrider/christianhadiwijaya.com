import {Swiper, SwiperSlide} from "swiper/react";
import {motion} from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import {EffectCoverflow, Pagination, Mousewheel} from "swiper/modules";

function SwiperFunc() {
	return (
		<motion.div
			className="flex justify-center items-center"
			initial={{opacity: 0, x: 50}}
			whileInView={{opacity: 1, x: 0}}
			viewport={{margin: "-50%", once: true}}
			transition={{duration: 1, delay: 0}}
		>
			<Swiper
				effect="coverflow"
				grabCursor={true}
				centeredSlides={true}
				pagination={{clickable: true}}
				slidesPerView={1}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 50,
					modifier: 3,
					slideShadows: true,
				}}
				spaceBetween={50}
				mousewheel={{
					sensitivity: 1,
					releaseOnEdges: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
					},
				}}
				className="w-[90vw] mt-[3vh]"
				initialSlide={0} // Set the initial slide index here
				modules={[EffectCoverflow, Pagination, Mousewheel]}
			>
				<SwiperSlide className="flex justify-center items-center align-center">
					<a
						className="h-full w-full md:w-[55vw]"
						href="https://nutritify.vercel.app/"
						target="_blank"
					>
						<img
							src="https://res.cloudinary.com/djvdforcq/image/upload/v1718638748/Copy_of_drop-down_4_wsryqx.png"
							alt="Slide 1"
							className="h-full w-full object-cover"
						/>
					</a>
				</SwiperSlide>
				<SwiperSlide className="flex justify-center items-center align-center">
					<a
						className="h-full w-[90dvw] md:w-[55vw]"
						href="https://github.com/Tianrider/mrt-location_be"
						target="_blank"
					>
						<img
							src="https://res.cloudinary.com/djvdforcq/image/upload/v1718637173/Copy_of_drop-down_1_odyhby.png"
							alt="Slide 1"
							className="object-cover h-full w-full"
						/>
					</a>
				</SwiperSlide>
				<SwiperSlide className="flex justify-center items-center align-center">
					<div className="h-full w-[90dvw] md:w-[55vw]">
						<img
							src="https://res.cloudinary.com/djvdforcq/image/upload/v1718638463/Copy_of_drop-down_3_dzobiy.png"
							alt="Slide 1"
							className="object-cover h-full w-full"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</motion.div>
	);
}

export default SwiperFunc;
