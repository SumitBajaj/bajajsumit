import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sumit Bajaj - Principal Architect</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Sumit Bajaj" />
        <meta name="keywords" content="Sitecore, .Net, Microservices, Architecture, Software Engineering" />
        <meta name="description" content="A professional with hands-on experience and expert in digital transformation." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Sumit Bajaj - Principal Architect" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Sumit Bajaj - Principal Architect</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Sumit Bajaj - Principal Architect"/>
        <meta data-rh="true" property="og:image" content="/images/sumit-profile.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;