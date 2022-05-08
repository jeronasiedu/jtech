import Image from 'next/image'
import { BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion'
const Hero = () => {
  const list = [
    'Perfectly designed websites',
    ' Not everyone can create like us',
    'We design sites that can sell',
  ]
  const animateVariant = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: '0.2',
        duration: 1,
      },
    },
  }
  const formVariant = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <section className="flex flex-col px-3 pb-24 mx-auto space-y-8 lg:items-center lg:space-y-0 lg:flex-row lg:space-x-3 max-w-7xl lg:pb-40">
      <div className="flex-1 space-y-6 transition-colors duration-300">
        <motion.header
          variants={animateVariant}
          initial="initial"
          whileInView="animate"
          className="space-y-6"
        >
          <motion.h1
            variants={animateVariant}
            initial="initial"
            whileInView="animate"
            className="text-5xl font-bold text-center md:text-6xl lg:text-7xl lg:text-left "
          >
            Your Website, <span className="text-blue-600">Reimagined</span>
          </motion.h1>
          <p className="text-xl text-[#4b5563] dark:text-slate-300 text-center lg:text-left max-w-xl md:mx-auto lg:mx-0 ">
            Bring your creative ideas to life, We work in a creative way to make
            your website a powerful tool for your business
          </p>
        </motion.header>
        <motion.form
          variants={formVariant}
          initial="initial"
          whileInView="animate"
          className="flex flex-col w-full max-w-md mx-auto space-y-4 transition-colors duration-300 lg:mx-0 lg:items-center lg:space-x-2 lg:space-y-0 lg:flex-row"
        >
          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 block px-3 py-3 text-lg transition-colors  rounded border-1 focus:outline-none focus:ring-2 ring-blue-600 dark:bg-[#191b2e] dark:border-gray-400 border  duration-300"
          />
          <button className="px-4 py-2.5 text-lg font-medium text-white bg-blue-600 border-2 border-blue-600 rounded hover:text-light_p hover:bg-transparent focus:outline-none focus:ring-4 dark:hover:text-white transition-colors duration-300 focus:ring-blue-400">
            Get In Touch
          </button>
        </motion.form>
        <motion.ul
          variants={animateVariant}
          initial="initial"
          whileInView="animate"
          className="flex flex-col md:items-center lg:items-start"
        >
          {list.map((item, idx) => (
            <motion.li
              className="flex items-center text-lg text-gray-700 dark:text-slate-300"
              key={idx}
              variants={formVariant}
              initial="initial"
              whileInView="animate"
            >
              <BiCheck size={22} className="mr-1 text-blue-600" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="flex-1">
        <motion.div
          className="relative w-full h-60 md:h-[30rem] lg:h-96"
          variants={animateVariant}
          initial="initial"
          whileInView="animate"
        >
          <Image
            src="/images/designer.png"
            alt="designer"
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
