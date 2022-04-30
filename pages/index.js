import { Achievements, Hero, Gallery } from '../components'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>J Tech | Design Reimagined</title>
      </Head>
      <Hero />
      <Achievements />
      <Gallery />
    </>
  )
}
