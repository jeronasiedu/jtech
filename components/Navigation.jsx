import Link from 'next/link'
import { useTheme } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BiMoon, BiSun, BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const links = [
  { title: 'About', url: '/' },
  { title: 'Blog', url: '/' },
  { title: 'Testimonials', url: '/' },
]
const Navigation = ({ toggleSidebar, openSidebar }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <header className="pb-24 lg:pb-40 ">
      <nav className="flex items-center p-6 px-3 mx-auto lg:px-6 max-w-7xl">
        <Link href="/">
          <a className="mr-8 text-xl font-bold">JTECH</a>
        </Link>
        <ul className="items-center flex-1 hidden space-x-6 lg:flex ">
          {links.map((item, idx) => (
            <li key={idx}>
              <Link href={item.url}>
                <a className="p-2 text-lg font-medium transition-colors duration-300 link text-light_p dark:hover:text-white dark:text-dark_p hover:text-black">
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="inline-flex items-center p-2.5  ml-auto mr-5 text-center text-white bg-blue-600 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400 overflow-hidden"
          onClick={handleTheme}
        >
          {theme === 'light' ? (
            <AnimatePresence>
              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 30,
                }}
              >
                <BiMoon size={22} />
              </motion.span>
            </AnimatePresence>
          ) : (
            <motion.span
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
            >
              <BiSun size={22} />
            </motion.span>
          )}
        </button>
        <button
          className="focus:ring-2 lg:hidden p-2.5 rounded ring-blue-500 ring-1"
          onClick={toggleSidebar}
        >
          {openSidebar ? (
            <AnimatePresence>
              <motion.span
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 30,
                }}
              >
                <AiOutlineClose size={22} />
              </motion.span>
            </AnimatePresence>
          ) : (
            <motion.span
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -30,
              }}
            >
              <BiMenu size={22} />
            </motion.span>
          )}
        </button>
        <Link href="/">
          <a className="hidden py-2 font-medium text-white transition-colors duration-300 bg-blue-600 border-2 border-blue-600 rounded px-7 hover:text-light_p hover:bg-transparent focus:outline-none focus:ring-4 focus:ring-blue-400 dark:hover:text-white lg:inline-block">
            Get In Touch
          </a>
        </Link>
      </nav>
    </header>
  )
}

export default Navigation
