import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'


export default function Contact(){
    return (
    <Layout>
        <Head>
            <title>Welcome my Portfolio</title>
            <meta name='description' content='포트폴리오'></meta>
        </Head>
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-3/6 mb-10 md:mb-0">
                <Image alt='HTML&CSS' className='object-cover object-center block' width="300" height="300" src="/Profile2.jpg"/>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-5 md:pl-5 flex flex-col md:items-start md:text-left items-center text-center">
                <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Contact
                </h3>
                <p className="mb-1 leading-relaxed">csa0545@gmail.com</p>
                <p className="mb-1 leading-relaxed">https://endeavor-ph.tistory.com/</p>
                <p className="mb-8 leading-relaxed">https://github.com/OJKSmITh</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                        <Link href="https://open.kakao.com/o/ssv0VGnf">KaKao</Link> 
                    </button>
                    <button className="ml-4 inline-flex text-gray-700 bg-blue-100 border-0 py-2 px-6 focus:outline-none hover:bg-blue-200 rounded text-lg">
                        <Link href="https://t.me/+V8rvrozi0800N2Q1">
                        Telegram
                        </Link>
                    </button>
                </div>
            </div>
        </div>
        </section>
    </Layout>
    )
    
}