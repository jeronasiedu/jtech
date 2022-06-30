import {useState} from 'react'

const Achievements = () => {
  const tabHeadings = ['2022', '2021', '2020', '2019']
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <section className="px-2 py-16 mx-auto max-w-7xl">
      <div className="mb-16 space-y-4 text-center">
        <h1 className="text-4xl font-medium md:text-5xl lg:text-6xl ">
          What we&apos;ve achieved
        </h1>
        <p className="max-w-4xl mx-auto text-xl text-gray-700 dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptates voluptatibus eius, magni aliquam vero!
        </p>
      </div>
      <div className="">
        <ul className="flex items-center justify-around px-2 md:space-x-5 md:justify-center dark:text-gray-100">
          {tabHeadings.map((heading, index) => (
            <Tabs
              key={index}
              heading={heading}
              activeIndex={activeIndex}
              index={index}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Achievements

const Tabs = ({ heading, setActiveIndex, activeIndex, index }) => {
  const isActive = activeIndex === index
  return (
    <li
      className={`${
        isActive
          ? 'border-blue-600 dark:text-white scale-125  dark:border-blue-600 '
          : 'border-gray-200 text-slate-gray-700 dark:text-slate-400  dark:border-gray-500'
      } flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer   transition-all duration-300  `}
      onClick={() => setActiveIndex(index)}
    >
      {heading}
    </li>
  )
}
