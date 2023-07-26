import Link from 'next/link'
import DarkModeToggleButton from './dark_mode_toggle_button'

export default function Header(){
    return (
        <>
            <header className="text-gray-600 dark:text-gray-100 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <Link href= "/" className="flex title-font font-medium items-center dark:text-gray-100  text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">장경호의 포트폴리오</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className='mr-5 hover:text-gray-900 dark:text-gray-100'>
                            홈
                        </Link>
                        <Link href="/projects" className='mr-5 hover:text-gray-900 dark:text-gray-100'>
                            프로젝트
                        </Link>
                        <Link href="/contact" className='mr-5 hover:text-gray-900 dark:text-gray-100'>
                            연락하기
                        </Link>
                        <Link href="/stack" className='mr-5 hover:text-gray-900 dark:text-gray-100'>
                            스택
                        </Link>
                    </nav>
                    {/* 다크모드 토클 */}
                    <DarkModeToggleButton/>
                </div>
            </header>
        </>
    )
}