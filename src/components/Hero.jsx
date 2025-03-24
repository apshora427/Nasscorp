import React from 'react'
import bg from "../assets/background.jpg"
import CounterCard from './CounterCard'
import countericon_1 from './../assets/c-1.png'
import countericon_2 from './../assets/c-2.png'
import countericon_3 from './../assets/c-3.png'
import countericon_4 from './../assets/c-4.png'
import { FaArrowRightLong } from "react-icons/fa6";
import BusinessCard from './BusinessCard'


const backgroundBG = {
    backgroundImage: `url(${bg})`
}



const data = [
  {
  id: 1,
  icon: countericon_1,
  text: "CASES DONE",
  countNumber: "3K"
},
{
  id: 2,
  icon: countericon_2,
  text: "AWARD WINNING",
  countNumber: 45
},
{
  id: 3,
  icon: countericon_3,
  text: "COUNTRIES WORLDWIDE",
  countNumber: "12+"
},
{
  id: 4,
  icon: countericon_4,
  text: "HAPPY CUSTOMERS",
  countNumber: "1.5K"
}
]

const Hero = () => {
  return (
    <section style={backgroundBG} className='bg-no-repeat bg-cover relative'>
       <div className='bg-black/50 pt-[250px]  md:pt-[235px] pb-[130px] '>
       <div className="container ">
            <div className='max-w-[860px] mx-auto py-[10px] md:px-[65px] text-center '>
                <h1 className=' max-w-[310px] mx-auto md:max-w-full font-bold md:font-extrabold text-[40px] md:text-[58px] leading-[57px] md:leading-[1.3] text-white'>Experts are here solve 
                your business problem.</h1>
                <p className='max-w-[279px] md:max-w-[550px] mx-auto  mt-[40px] mb-[40px]  items-center font-medium text-[20px] md:leading-normal leading-[30px] text-white justify-center tracking-[0.2px]'>We know how large objects will act, but things on a
                small scale just do not act that way.</p>
                <div className='flex flex-col md:flex-row items-center gap-4 justify-center pt-5'>
                    <button className='bg-primary-color cursor-pointer hover:bg-transparent transition-all hover:border-[2px] hover:border-white text-white font-bold text-[14px] rounded-[37px] py-[15px] px-[36px]'>Get Quote Now</button> 
                    <button className='bg-primary-color cursor-pointer text-white hover:bg-transparent transition-all hover:border-[2px] hover:border-white font-bold text-[14px] rounded-[37px] py-[15px] px-[36px]'>Learn More</button>
                </div>
            </div>
          
        </div>
        <div className=' px-[87px]  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4   gap-[30px] lg:gap-0   justify-center  mt-[80px] lg:px-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:w-[1082px] lg:translate-y-1/2 lg:-translate-x-1/2'>
            {data?.map(countItem => {
              return <CounterCard key={countItem.id} icon={countItem.icon} text={countItem.text} countNumber={countItem.countNumber}/>
            })}
           </div>
          
       </div>
    </section>
  )
}

export default Hero