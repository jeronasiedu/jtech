import 'aos/dist/aos.css'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import 'swiper/css'
import 'swiper/css/navigation'
import Layout from '../components/Layout'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
