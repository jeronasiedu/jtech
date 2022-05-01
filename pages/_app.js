import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import 'swiper/css'
import 'swiper/css/navigation'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
