import Image from 'next/image'
import React from 'react'

const Story = () => {
  return (
    <section className="min-h-screen px-2 mx-auto max-w-7xl">
      <div className="space-y-4 text-center">
        <h2
          className="text-4xl font-medium text-center md:text-5xl lg:text-6xl"
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
        {/* <Image
          src="/images/about-hero.jpg"
          alt="About image"
          width={780}
          height={480}
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/images/about-hero.jpg"
          className="mask"
        /> */}
      </div>
    </section>
  )
}

export default Story
