import Layout from '../components/layout'
import Head from 'next/head'
import Hero from '../components/home/hero'
import Image from "next/image"

export default function Stack() {
  return (
   <>
     <Layout>
        <Head>
            <title>Welcome my Portfolio</title>
            <meta name='description' content='포트폴리오'></meta>
        </Head>
            <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden hover:scale-[1.25] hover:shadow-l transition duration-300 transform">
                    <Image alt='HTML&CSS' className='object-cover object-center block' width="500" height="500" src="/htmlcss.png"/>
                </a>
                <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stack</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">HTML&CSS</h2>
                </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="flex items-center justify-center relative h-48 rounded overflow-hidden hover:scale-[1.25] hover:shadow-l transition duration-300 transform">
                    <Image alt='Javascript' className='object-cover object-center block' width="200" height="100" src="/javascript.png"/>
                </a>
                <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stack</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Javascript</h2>
                </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="flex items-center justify-center relative h-48 rounded overflow-hidden hover:scale-[1.25] hover:shadow-l transition duration-300 transform">
                    <Image alt='Typescript' className='object-cover object-center block' width="200" height="100" src="/typescript.png"/>
                </a>
                <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stack</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Typescript</h2>
                </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="flex items-center justify-center relative h-48 rounded overflow-hidden hover:scale-[1.25] hover:shadow-l transition duration-300 transform">
                    <Image alt='React' className='object-cover object-center block' width="200" height="100" src="/react.png"/>
                </a>
                <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stack</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">React</h2>
                </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="flex items-center justify-center relative h-48 rounded overflow-hidden hover:scale-[1.25] hover:shadow-l transition duration-300 transform">
                    <Image alt='NodeJs' className='object-cover object-center block' width="200" height="100" src="/Nodejs.png"/>
                </a>
                <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stack</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Node.js</h2>
                </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="flex items-center justify-center relative h-48 rounded overflow-hidden hover:scale-[1.25] hover:shadow-l transition duration-300 transform">
                    <Image alt='NodeJs' className='object-cover object-center block' width="200" height="100" src="/aws.png"/>
                </a>
                <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stack</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">AWS</h2>
                </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="flex items-center justify-center relative h-48 rounded overflow-hidden hover:scale-[1.25] hover:shadow-l transition duration-300 transform">
                    <Image alt='NodeJs' className='object-cover object-center block' width="200" height="100" src="/MySQL.png"/>
                </a>
                <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stack</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">MySQL</h2>
                </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="flex items-center justify-center relative h-48 rounded overflow-hidden hover:scale-[1.25] hover:shadow-l transition duration-300 transform">
                    <Image alt='Solidity' className='object-cover object-center block' width="200" height="100" src="/Solidtycon.png"/>
                </a>
                <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stack</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Solidity</h2>
                </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="flex items-center justify-center relative h-48 rounded overflow-hidden hover:scale-[1.25] hover:shadow-l transition duration-300 transform">
                    <Image alt='Sequelize' className='object-cover object-center block' width="200" height="100" src="/Sequelize.png"/>
                </a>
                <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stack</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Sequelize</h2>
                </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="flex items-center justify-center relative h-48 rounded overflow-hidden hover:scale-[1.25] hover:shadow-l transition duration-300 transform">
                    <Image alt='Linux' className='object-cover object-center block' width="200" height="100" src="/Rlinux.png"/>
                </a>
                <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Stack</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Linux</h2>
                </div>
            </div>
            </div>
        </div>
        </section>
     </Layout>
   </>
  )
}