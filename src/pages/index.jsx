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

      <div className="mx-auto max-w-[1600px] bg-page">
        <Hero />
      </div>
      <section className="h-[2000px]"></section>
    </>
  )
}

export default Home
