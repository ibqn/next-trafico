import Hero from "components/hero"
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
      </div>
    </>
  )
}

export default Home
