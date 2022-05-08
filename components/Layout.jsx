import Footer from './Footer'
import Sidebar from './Sidebar'
import Navigation from './Navigation'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [mounted, setMounted] = useState(false)

  const toggleSidebar = (e) => {
    setOpenSidebar((prev) => !prev)
  }

  useEffect(() => {
    setMounted(true)
  }, [])
  if (mounted) {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        setOpenSidebar(false)
      }
    })
  }
  return (
    <>
      <Navigation toggleSidebar={toggleSidebar} openSidebar={openSidebar} />
      <motion.main>{children}</motion.main>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <Footer />
    </>
  )
}

export default Layout
