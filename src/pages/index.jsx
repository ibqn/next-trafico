import { About } from "components/about"
import { Copyright } from "components/copyright"
import { Faq } from "components/faq"
import { Footer } from "components/footer"
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
        <Footer />
        <Copyright />
      </div>
    </>
  )
}

export default Home
