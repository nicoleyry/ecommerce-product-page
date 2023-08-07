import { useState } from 'react';
import '../styles/itemshowcase.scss';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// images
import product1 from '../images/image-product-1.jpg';
import product2 from '../images/image-product-2.jpg';
import product3 from '../images/image-product-3.jpg';
import product4 from '../images/image-product-4.jpg';
import product1Thumb from '../images/image-product-1-thumbnail.jpg';
import product2Thumb from '../images/image-product-2-thumbnail.jpg';
import product3Thumb from '../images/image-product-3-thumbnail.jpg';
import product4Thumb from '../images/image-product-4-thumbnail.jpg';

import iconPrev from '../images/icon-previous.svg';
import iconNext from '../images/icon-next.svg';
import iconClose from '../images/icon-close.svg';

// import required modules
import { Navigation, Thumbs } from 'swiper/modules';

// register Swiper custom elements
register();

export default function ItemShowcase() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [lightboxThumbsSwiper, setLightboxThumbsSwiper] = useState(null);
	const [showLightbox, setShowLightBox] = useState(false);

	const lightboxHandler = (e) => {
		e.target.classList.contains('cover') || e.target.classList.contains('button-close')
			? setShowLightBox(false)
			: setShowLightBox(true);
	};

	return (
		<div className='item-showcase'>
			<Swiper
				loop={true}
				spaceBetween={10}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				modules={[Thumbs]}
				className='showcase'
			>
				<SwiperSlide>
					<img src={product1} alt='Product 1' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product2} alt='Product 2' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product3} alt='Product 3' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={product4} alt='Product 4' />
				</SwiperSlide>
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={30}
				watchSlidesProgress={true}
				modules={[Thumbs]}
				className='thumbnail'
				slidesPerView={4}
			>
				<SwiperSlide>
					<img
						src={product1Thumb}
						alt='Product 1 Thumbnail'
						onClick={() => (!showLightbox ? setShowLightBox(true) : setShowLightBox(false))}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={product2Thumb}
						alt='Product 2 Thumbnail'
						onClick={() => (!showLightbox ? setShowLightBox(true) : setShowLightBox(false))}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={product3Thumb}
						alt='Product 3 Thumbnail'
						onClick={() => (!showLightbox ? setShowLightBox(true) : setShowLightBox(false))}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src={product4Thumb}
						alt='Product 4 Thumbnail'
						onClick={() => (!showLightbox ? setShowLightBox(true) : setShowLightBox(false))}
					/>
				</SwiperSlide>
			</Swiper>

			{showLightbox && (
				<div className='cover' onClick={(event) => lightboxHandler(event)}>
					<div className='cover-container'>
						<Swiper
							loop={true}
							spaceBetween={10}
							navigation={{
								prevEl: '.custom-button-prev',
								nextEl: '.custom-button-next',
							}}
							thumbs={{
								swiper:
									lightboxThumbsSwiper && !lightboxThumbsSwiper.destroyed
										? lightboxThumbsSwiper
										: null,
							}}
							modules={[Navigation, Thumbs]}
							className='cover-showcase showcase'
						>
							<SwiperSlide>
								<img src={product1} alt='Product 1' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={product2} alt='Product 2' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={product3} alt='Product 3' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={product4} alt='Product 4' />
							</SwiperSlide>
						</Swiper>
						<img
							className='button-close'
							onClick={(event) => lightboxHandler(event)}
							src={iconClose}
							alt='close'
						/>
						<div className='custom-button custom-button-prev'>
							<img src={iconPrev} alt='previous' />
						</div>
						<div className='custom-button custom-button-next'>
							<img src={iconNext} alt='next' />
						</div>
						<Swiper
							onSwiper={setLightboxThumbsSwiper}
							loop={true}
							spaceBetween={30}
							watchSlidesProgress={true}
							modules={[Thumbs]}
							className='cover-thumbnail thumbnail'
							slidesPerView={4}
						>
							<SwiperSlide>
								<img src={product1Thumb} alt='Product 1 Thumbnail' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={product2Thumb} alt='Product 2 Thumbnail' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={product3Thumb} alt='Product 3 Thumbnail' />
							</SwiperSlide>
							<SwiperSlide>
								<img src={product4Thumb} alt='Product 4 Thumbnail' />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			)}
		</div>
	);
}
