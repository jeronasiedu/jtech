import Footer from './Footer'
import Sidebar from './Sidebar'
import Navigation from './Navigation'
import { useState, useEffect } from 'react'

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [mounted, setMounted] = useState(false)

  const toggleSidebar = () => {
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
      {children}
      <Sidebar openSidebar={openSidebar} />
      {/* <Footer /> */}
    </>
  )
}

export default Layout
