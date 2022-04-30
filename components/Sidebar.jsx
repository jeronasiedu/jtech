import Link from 'next/link'
import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useClickOutside } from '../utils/hooks'
const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const links = [
    { title: 'About', url: '/' },
    { title: 'Blog', url: '/' },
    { title: 'Testimonials', url: '/' },
  ]
  const closeSidebar = (e) => {
    if (!e.target.classList.contains('overlay')) {
      return
    }
    setOpenSidebar(false)
  }
  return (
    <>
      <AnimatePresence>
        {openSidebar && (
          <div
            className="fixed top-0 left-0 w-full min-h-screen overlay"
            onClick={closeSidebar}
          >
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: '-100%',
                opacity: 0,
              }}
              className=" w-3/4 max-w-sm min-h-screen p-3 py-6 bg-white  custom-shadow  dark:bg-[#161821]"
            >
              <nav className="flex flex-col space-y-4">
                <Link href="/">
                  <a className="p-2 text-xl font-bold ">JTECH</a>
                </Link>
                <ul className="pb-4 space-y-6 border-b border-gray-500">
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
                <button className="py-2 font-medium text-white transition-colors duration-300 bg-blue-600 border-2 border-blue-600 rounded px-7 hover:text-light_p hover:bg-transparent focus:outline-none focus:ring-4 focus:ring-blue-400 dark:hover:text-white ">
                  Get In Touch
                </button>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar
