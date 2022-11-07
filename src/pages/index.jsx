import { About } from "components/about"
import { Faq } from "components/faq"
import { Hero } from "components/hero"
import How from "components/how"
import { Testimonials } from "components/testimonials"
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>Trafico</title>
        <meta name="description" content="Trafico next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-[1600px] overflow-hidden bg-page">
        <Hero />
        <About />
        <How />
        <Faq />
        <Testimonials />
      </div>
    </>
  )
}

export default Home
