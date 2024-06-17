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
				className="w-[90vw] mt-[3	vh]"
				initialSlide={1} // Set the initial slide index here
				modules={[EffectCoverflow, Pagination, Mousewheel]}
			>
				<SwiperSlide className="flex justify-center items-center align-center">
					<div className=" h-full w-[90dvw] md:w-[55vw]">
						<img
							src="https://th.bing.com/th/id/OIP.wUEpMhbsibxsOh7oOq8SEgHaEo?rs=1&pid=ImgDetMain"
							alt="Slide 1"
							className="object-cover h-full w-full"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="flex justify-center items-center align-center">
					<div className=" h-full w-[90dvw] md:w-[55vw]">
						<img
							src="https://th.bing.com/th/id/OIP.wUEpMhbsibxsOh7oOq8SEgHaEo?rs=1&pid=ImgDetMain"
							alt="Slide 1"
							className="object-cover h-full w-full"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className="flex justify-center items-center align-center">
					<div className=" h-full w-[90dvw] md:w-[55vw]">
						<img
							src="https://th.bing.com/th/id/OIP.wUEpMhbsibxsOh7oOq8SEgHaEo?rs=1&pid=ImgDetMain"
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
