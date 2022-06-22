import Image from 'next/image'
const Story = () => {
  const images = [
    {
      src: '/images/asset7.jpeg',
      alt: 'some image bi',
      width: 360,
    },
    {
      src: '/images/asset8.jpeg',
      alt: 'some image bi',
      width: 270,
    },
    {
      src: '/images/asset9.jpeg',
      alt: 'some image bi',
      width: 450,
    },

    {
      src: '/images/asset10.jpeg',
      alt: 'some image bi',
      width: 270,
    },
    {
      src: '/images/asset11.jpeg',
      alt: 'some image bi',
      width: 450,
    },
    {
      src: '/images/asset12.jpeg',
      alt: 'some image bi',
      width: 360,
    },
  ]
  return (
    <section className="px-2 mx-auto max-w-7xl">
      <div className="mb-16 space-y-4 text-center">
        <h2
          className="text-4xl font-medium md:text-5xl lg:text-6xl"
          data-aos="fade-zoom-in"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out-back"
        >
          The story behind the project
        </h2>
        <p
          className="max-w-4xl mx-auto text-xl text-gray-700 dark:text-slate-300"
          data-aos="fade-zoom-in"
          data-aos-duration="1300"
          data-aos-delay="200"
          data-aos-easing="ease-in-out-back"
        >
          We are designing a new way to do business. We work together to design,
          create and produce work that we are proud for folks that we believe
          in.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4">
          {images.map((image, idx) => (
            <Image
              src={image.src}
              alt="some image"
              height={270}
              width={image.width}
              objectFit="cover"
              placeholder="blur"
              blurDataURL={image.src}
              key={idx}
              className="rounded-sm"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Story
