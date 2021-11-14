import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from 'public/images/logo.svg'
import TipForm from 'components/TipForm'
import Footer from 'components/Footer'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen grid gap-12 desktop:gap-0 text-primary-medium-dark desktop:max-w-desktop">
      <Head>
        <title>Frontend Mentor | Tip calculator app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="place-self-center desktop:m-0">
        <h1 className="mt-12 mb-10">
          <span className="sr-only">Splitter</span>
          <Image src={logo} alt="Splitter" />
        </h1>
      </header>
      <main className="desktop:place-self-center flex desktop:flex-row bg-white rounded-t-3xl desktop:rounded-3xl desktop:w-[57.5rem] desktop:h-[30rem] lg:h-[481px] p-8">
        <TipForm />
      </main>
      <Footer />
    </div>
  )
}

export default Home
