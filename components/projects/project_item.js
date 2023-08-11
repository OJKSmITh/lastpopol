import Link from 'next/link'
import Image from 'next/image'
import { Custom } from '../modal/customModal'
import React, {useState, useEffect, useRef} from 'react'
import { Icon } from '@iconify/react';

const ModalCon1 = ()=>{
    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
        const scrollContainer = scrollContainerRef.current;
        const currentMarginLeft = parseInt(scrollContainer.style.marginLeft || 0);
        
        if (direction === "left") {
            if(currentMarginLeft === 0){
                scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0) - 5015}px`
            }
          scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0) + 1005}px`;
        } else if (direction === "right") {
            console.log(scrollContainer.style.marginLeft)
            if(scrollContainer.style.marginLeft === "-4020px"){
                scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0)+5015}px`
            }
          scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0) - 1005}px`;
        }
      };


    return (
        <>
            <div ref={scrollContainerRef} className='flex w-[5025px] h-[750px] duration-500 transition-all ml-0'>
                <div className='w-[1005px] h-[530px] p-12 '>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/swap_page.png"/>
                    <div className='bg-white border-hidden mt-5 text-2xl dark:text-black'>Defi 코인&토큰을 스왑하는 페이지입니다.</div>
                    <div className='bg-white border-hidden text-2xl dark:text-black'>Chain Link의 토큰, 코인 가격을 자동으로 받아오며</div>
                    <div className='bg-white border-hidden text-2xl dark:text-black'>이때 스왑하는 대가로, Defi 생태계에 토큰을 제공합니다</div>
                </div>
                <div className='w-[1005px] h-[650px] p-12'>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/deposit.png"/>
                    <div className='bg-white border-hidden mt-5 mx-auto text-2xl dark:text-black'>단일 토큰 예치 페이지입니다.</div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>한가지 토큰만 예치하는 페이지입니다.</div>
                </div>
                <div className='w-[1005px] h-[650px] p-12'>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/pairdeposit.png"/>
                    <div className='bg-white border-hidden mt-5 mx-auto text-2xl dark:text-black'>페어예치 페이지입니다.</div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>페어예치를 진행하는데, 이때 당시도, chainLink</div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>를 통해서 예치 비율을 산정하고, 그 비율에 맞춰야만 예치가 가능합니다.</div>
                </div>
                <div className='w-[1005px] h-[650px] p-12'>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/stakingpage.png"/>
                    <div className='bg-white border-hidden mt-5 mx-auto text-2xl dark:text-black'>staking 페이지입니다.</div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>우리가 넣은 페어예치를 하고 받은 lp를 생태계에 제공하고, </div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>그 대가로 생태계에 참여할 권리를 받습니다.</div>
                </div>
                <div className='w-[1005px] h-[650px] p-12'>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/unstakingpage.png"/>
                    <div className='bg-white border-hidden mt-5 mx-auto text-2xl dark:text-black'>Unstaking 페이지입니다.</div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>Un</div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>이때 스왑하는 대가로, Defi 생태계에 토큰을 제공합니다</div>
                </div>
                <Icon icon="iconoir:nav-arrow-up" className='absolute text-7xl font-bold top-[300px] left-[-10px] dark:text-black' onClick={()=>handleScroll('left')} rotate={3} />
                <Icon icon="iconoir:nav-arrow-up" className='absolute text-7xl font-bold top-[300px] left-[950px] dark:text-black' onClick={()=>handleScroll('right')} rotate={1} />
            </div>
        </>
    )
}
const ModalCon2 = ()=>{
    const scrollContainerRef = useRef(null);
    
    const handleScroll = (direction) => {
        const scrollContainer = scrollContainerRef.current;
        const currentMarginLeft = parseInt(scrollContainer.style.marginLeft || 0);
    
        if (direction === "left") {
            if(currentMarginLeft===0){
                scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0) - 4020}px`
            }
          scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0) + 1005}px`;
        } else if (direction === "right") {
            console.log(scrollContainer.style.marginLeft)
            if(scrollContainer.style.marginLeft === "-3015px"){
                scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0)+4020}px`
            }
          scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0) - 1005}px`;
        }
      };


    return (
        <>
            <div ref={scrollContainerRef} className='flex w-[4020px] h-[750px] duration-500 transition-all'>
                <div className='w-[1005px] h-[530px] p-12 '>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/chatpiano.png"/>
                    <div className='bg-white border-hidden mt-5 text-2xl dark:text-black'>사용자에게 멜로디를 입력받고, chatGpt에게 전송하는 페이지입니다</div>
                    <div className='bg-white border-hidden text-2xl dark:text-black'>5개의 입력값을 받으면 악보를 띄우고</div>
                    <div className='bg-white border-hidden text-2xl dark:text-black'>입력값을 전송하고 나면 그걸 토대로 멜로디를 만들어줍니다.</div>
                </div>
                <div className='w-[1005px] h-[650px] p-12'>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/chat2.png"/>
                    <div className='bg-white border-hidden mt-5 mx-auto text-2xl dark:text-black'>Socket.Io를 이용한 전체 채팅방입니다.</div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>socket.io의 event명을 통해 전체 채팅을 구현하였습니다.</div>
                </div>
                <div className='w-[1005px] h-[650px] p-12'>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/Oauth.png"/>
                    <div className='bg-white border-hidden mt-5 mx-auto text-2xl dark:text-black'>간편로그인입니다.</div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>Oauth 2.0을 통한 간편 로그인을 구현하였습니다.</div>
                </div>
                <div className='w-[1005px] h-[650px] p-12'>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/emailauth3.png"/>
                    <div className='bg-white border-hidden mt-5 mx-auto text-2xl dark:text-black'>이메일 인증입니다.</div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>nodemailer를 통해서 구현하였고, 구글메일 서비스를 사용하였습니다.</div>
                </div>
                <Icon icon="iconoir:nav-arrow-up" className='absolute text-7xl font-bold top-[300px] left-[-10px] dark:text-black' onClick={()=>handleScroll('left')} rotate={3} />
                <Icon icon="iconoir:nav-arrow-up" className='absolute text-7xl font-bold top-[300px] left-[950px] dark:text-black' onClick={()=>handleScroll('right')} rotate={1} />
            </div>
        </>
    )
}
const ModalCon3 = ()=>{
    const scrollContainerRef = useRef(null);
    
    const handleScroll = (direction) => {
        const scrollContainer = scrollContainerRef.current;
        const currentMarginLeft = parseInt(scrollContainer.style.marginLeft || 0);
        if (direction === "left") {
            if(currentMarginLeft===0){
                scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0) - 3015}px`
            }
          scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0) + 1005}px`;
        } else if (direction === "right") {
            console.log(scrollContainer.style.marginLeft)
            if(scrollContainer.style.marginLeft === "-2010px"){
                scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0)+3015}px`
            }
          scrollContainer.style.marginLeft = `${parseInt(scrollContainer.style.marginLeft || 0) - 1005}px`;
        }
      };


    return (
        <>
            <div ref={scrollContainerRef} className='flex w-[4020px] h-[750px] duration-500 transition-all'>
                <div className='w-[1005px] h-[530px] p-12 '>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/indexing2.png"/>
                    <div className='bg-white border-hidden mt-5 text-2xl dark:text-black'>전체 게시물 검색기능입니다.</div>
                    <div className='bg-white border-hidden text-2xl dark:text-black'>게시물, 유저를 검색할 수 있도록 설정하였습니다.</div>
                </div>
                <div className='w-[1005px] h-[650px] p-12'>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/hot5.png"/>
                    <div className='bg-white border-hidden mt-5 mx-auto text-2xl dark:text-black'>Sequelize를 통해 indexing하는 페이지입니다.</div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>DB에서 좋아요를 받은 순대로 핫 게시물을 선정합니다</div>
                </div>
                <div className='w-[1005px] h-[650px] p-12'>
                    <Image alt="swap page" className='object-cover mx-auto' width="900" height="600" src="/main2.png"/>
                    <div className='bg-white border-hidden mt-5 mx-auto text-2xl dark:text-black'>메인페이지입니다.</div>
                    <div className='bg-white border-hidden mx-auto text-2xl dark:text-black'>게시판에서 랜덤한 9개의 게시물을 가져오도록 설정하였습니다</div>
                </div>
                
                <Icon icon="iconoir:nav-arrow-up" className='absolute text-7xl font-bold top-[300px] left-[-10px] dark:text-black' onClick={()=>handleScroll('left')} rotate={3} />
                <Icon icon="iconoir:nav-arrow-up" className='absolute text-7xl font-bold top-[300px] left-[950px] dark:text-black' onClick={()=>handleScroll('right')} rotate={1} />
            </div>
        </>
    )
}


export default function ProjectItem({index,data}){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const title = data.properties.name.title[0].plain_text
    const githubLink = data.properties.Github.url
    const description = data.properties.description.rich_text[0].plain_text
    const imgSrc = data.cover.file.url
    const tags = data.properties.tag.multi_select
    const startDate = data.properties.period.date.start
    const endDate = data.properties.period.date.end

    const fixdescript= description.split("-")
    fixdescript.shift()

    let ModalContent;
    switch (index) {
        case 0:
          ModalContent = ModalCon1;
          break;
        case 1:
          ModalContent = ModalCon2;
          break;
        case 2:
          ModalContent = ModalCon3;
          break;
        default:
          ModalContent = () => <div>No content available.</div>;
          break;
      }
    

    const calculatedPeriod = (start, end) =>{
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);
        return result;
    }
    let realDate = calculatedPeriod(startDate,endDate)

    return(
        <div className='project-card w-[45%] h-[620px] overflow-hidden'>
            <img className='object-cover h-[240px] ' src={imgSrc} onClick={()=>{setModalIsOpen(true)}}></img>
            <Custom isOpen={modalIsOpen} onClose={()=>setModalIsOpen(false)} width={1005} height={730} content={<ModalContent/>}></Custom>
            <div className='p-4 flex flex-col overflow-y-scroll overflow-x-hidden'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                {fixdescript.map((item, index) => (
                    <h3 key={index} className='mt-4 text-xl'>{item}</h3>
                ))}
                <p className="my-1 ">
                    작업기간 : {startDate} ~ {endDate} ({realDate}일)
                </p>
                <Link href={githubLink} className="text-gray-400 hover:text-gray-900" >GithubLink</Link>
                <div className='flex items-start mt-2'>
                    {tags.map((aTag)=>
                    (
                        <h1 className='px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30' key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    )
}