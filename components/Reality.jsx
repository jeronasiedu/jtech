import Image from 'next/image'
import React from 'react'

const Reality = () => {
  return (
    <section className="px-4 pb-16 mx-auto space-y-6 max-w-7xl">
      <div className="max-w-3xl px-4 mx-auto space-y-8">
        <h2 className="text-4xl font-bold text-center md:text-5xl lg:text-6xl">
          Turn your ideas into reality in{' '}
          <span className="text-blue-600">seconds</span>
        </h2>
        <p className="text-xl text-center text-gray-700 dark:text-slate-300">
          At JTECH, we produced top notch quality products at the fastest time
          possible. We have professional developers making every single second
          count.{' '}
        </p>
      </div>
      <div className="relative w-full h-28 md:h-64 lg:h-[24rem]">
        <Image
          src="/images/time.png"
          alt="Graphical representation of what a project looks from start to finish"
          layout="fill"
          placeholder="blur"
          blurDataURL="/images/time.png"
          objectFit="cover"
        />
      </div>
    </section>
  )
}

export default Reality
