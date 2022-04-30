import Image from 'next/image'
import { SwiperSlide, Swiper } from 'swiper/react'
const Gallery = () => {
  const images = [
    { url: '/images/asset1.jpeg', alt: 'carousel image' },
    { url: '/images/asset2.jpeg', alt: 'carousel image' },
    { url: '/images/asset3.jpeg', alt: 'carousel image' },
    { url: '/images/asset4.jpeg', alt: 'carousel image' },
    { url: '/images/asset5.jpeg', alt: 'carousel image' },
  ]

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
        slidesPerView={1}
        grabCursor
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          976: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <figure className="relative w-full h-80 md:h-96 lg:h-[26rem]">
              <Image
                src={item.url}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}

export default Gallery

function Example({}) {
  return (
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
  )
}
