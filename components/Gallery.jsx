import Image from 'next/image'
import { useRef, useCallback } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay } from 'swiper'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { useMediaQuery } from '../utils/hooks'
const Gallery = () => {
  const images = [
    { url: '/images/asset1.jpeg', alt: 'carousel image' },
    { url: '/images/asset2.jpeg', alt: 'carousel image' },
    { url: '/images/asset3.jpeg', alt: 'carousel image' },
    { url: '/images/asset4.jpeg', alt: 'carousel image' },
    { url: '/images/asset5.jpeg', alt: 'carousel image' },
  ]
  const sliderRef = useRef(null)
  const isDesktop = useMediaQuery('(min-width: 976px)')
  const isTablet = useMediaQuery('(min-width:768px)')

  const getSlidesPerView = () => {
    if (isDesktop) {
      return 3
    } else if (isTablet) {
      return 2
    } else return 1
  }

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])
  return (
    <article className="pb-16">
      <div className="flex flex-col items-center justify-center max-w-3xl px-4 py-16 mx-auto space-y-8 ">
        <h1 className="text-4xl font-bold text-center md:text-5xl lg:text-6xl">
          From rough design files, to {''}
          <span className="text-blue-600 ">powerful products</span>
        </h1>
        <p className="text-xl text-center text-gray-700 dark:text-slate-300 ">
          We can give you the perfect identity with our beautifully designed
          webpages. A large company needs perfectly designed website for
          expressing themselves
        </p>
      </div>
      <Swiper
        slidesPerView={getSlidesPerView()}
        loop={true}
        grabCursor
        spaceBetween={20}
        modules={[Autoplay]}
        ref={sliderRef}
        speed={2000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx}>
            {({ isNext }) => (
              <figure className="relative w-full h-80 md:h-96 lg:h-[26rem]">
                <Image
                  src={item.url}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  // className={`${
                  //   !isNext ? 'grayscale' : 'grayscale-0'
                  // } transition-all duration-300`}
                  priority
                />
              </figure>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container flex items-center justify-between px-6 mx-auto mt-8">
        <button
          className="p-4 transition-colors duration-300 bg-blue-500 rounded-sm cursor-pointer focus:ring focus:ring-blue-400 focus:outline-none dark:bg-slate-700 dark:hover:bg-slate-500"
          onClick={handlePrev}
        >
          <BiLeftArrow size={20} className="text-white " />
        </button>
        <button
          className="p-4 transition-colors duration-300 bg-blue-500 rounded-sm cursor-pointer focus:ring focus:ring-blue-400 focus:outline-none dark:bg-slate-700 dark:hover:bg-slate-500"
          onClick={handleNext}
        >
          <BiRightArrow size={20} className="text-white " />
        </button>
      </div>
    </article>
  )
}

export default Gallery
