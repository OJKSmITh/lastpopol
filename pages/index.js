import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/home/hero'



export default function Home() {
  return (
   <>
     <Layout>
      <Head>
        
        <title>Welcome my Portfolio</title>
        <meta name='description' content='포트폴리오'></meta>
      </Head>
      <section className="flex h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-9 py-24 md:flex-row flex-col items-center">
              <Hero/>
            </div>
        </section>
     </Layout>
   </>
  )
}
