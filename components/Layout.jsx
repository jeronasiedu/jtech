import Footer from './Footer'
import Sidebar from './Sidebar'
import Navigation from './Navigation'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import AOS from 'aos'
const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  const toggleSidebar = (e) => {
    setOpenSidebar((prev) => !prev)
  }

  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setOpenSidebar(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  if (mounted) {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        setOpenSidebar(false)
      }
    })
  }
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

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
