import Animation from './animation'
import Link from "next/link"


export default function Hero(){
    return  (
        <>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">반갑습니다. 개발자 장경호입니다.
                <br className="hidden lg:inline-block"/>
                </h1>
                    <p className="leading-relaxed">
                        철학을 사랑하는 개발자 장경호입니다.
                    </p>
                    <p className="leading-relaxed">
                        철학하면 떠오르는 말 중 하나인 "너 자신을 알라"라는 말이 있습니다.
                    </p>
                    <p className="leading-relaxed">
                        저는 개발을 공부하면서 이 말이 가장 큰 도움이 됐고, 개발에서의 나침반이라고 생각합니다.
                    </p>
                    <p className="leading-relaxed">
                        앞으로 개발자로 살아가면서 계속 모자람을 인정하고 배우겠습니다. 
                    </p>
                    <p className="mb-8 leading-relaxed">
                        방문해주셔서 감사합니다! 
                    </p>
                <div className="flex justify-center">
                    <button className="btn-project">
                    <Link href="/projects">
                        프로젝트 보러가기
                    </Link>
                    </button>
                </div>
        </div>
        
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation/>
        </div>
        </>
    )
}