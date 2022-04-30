import { motion } from 'framer-motion'
const Achievements = () => {
  const achieve = [
    {
      text: '20',
      desc: 'companies served',
    },
    {
      text: '186',
      desc: 'Projects built',
    },
    {
      text: '12',
      desc: 'Countries delivered',
    },
    {
      text: '2',
      desc: 'International awards',
    },
  ]
  const sectionVariant = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1.2,
      },
    },
  }
  const cardVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.3,
        duration: 1,
      },
    }),
  }
  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      whileInView="animate"
      className="grid grid-cols-2 gap-4 px-3 pb-16 mx-auto lg:gap-6 lg:grid-cols-4 max-w-7xl"
    >
      {achieve.map((item, idx) => (
        <motion.div
          key={idx}
          variants={cardVariant}
          initial="initial"
          custom={idx}
          animate="animate"
          className="flex flex-col items-center justify-center py-6 space-y-2 bg-white rounded-sm dark:bg-slate-700 card-shadow "
        >
          <h3 className="text-5xl font-semibold">{item.text}</h3>
          <p className="text-lg text-center text-slate-600 dark:text-slate-300">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.section>
  )
}

export default Achievements
