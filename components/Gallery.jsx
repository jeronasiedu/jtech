import Image from 'next/image'
import { SwiperSlide, Swiper } from 'swiper/react'
const Gallery = () => {
  const images = [
    { url: '/images/asset1.jpeg', alt: 'carousel image' },
    { url: '/images/asset1.jpeg', alt: 'carousel image' },
    { url: '/images/asset1.jpeg', alt: 'carousel image' },
    { url: '/images/asset1.jpeg', alt: 'carousel image' },
  ]
  return (
    <article>
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
        slidesPerView={1}
        grabCursor
        // loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          976: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          {images.map((item, idx) => (
            <figure key={idx} className="relative">
              <Image src={item.url} alt={item.alt} />
            </figure>
          ))}
        </SwiperSlide>
      </Swiper>
    </article>
  )
}

export default Gallery
