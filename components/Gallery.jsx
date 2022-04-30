import React from 'react'

const Gallery = () => {
  return (
    <article>
      <div className="flex flex-col items-center justify-center max-w-3xl py-16 mx-auto space-y-8 ">
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
    </article>
  )
}

export default Gallery
