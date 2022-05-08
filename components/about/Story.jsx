import Image from 'next/image'
import React from 'react'

const Story = () => {
  return (
    <section className="min-h-screen px-2 mx-auto max-w-7xl">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-medium text-center md:text-5xl lg:text-6xl ">
          The story behind the project
        </h2>
        <p className="text-xl text-gray-700 md:text-2xl dark:text-slate-300">
          We are designing a new way to do business
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
