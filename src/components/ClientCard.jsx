import client_1 from '../assets/client_1.png'
import client_2 from '../assets/client_2.png'
import client_3 from '../assets/client_3.png'
import start_1 from '../assets/start_1.png'
import start_2 from '../assets/start_2.png'

const client = [
    {
        id: 1,
        img: client_1,
        h2: "Regina Miles",
        span: "Designer",
        para: "This proved to be impossible using the traditional concepts of space and time.Einstein developed a new view of time first and then space.This proved to be impossible using the traditional concepts of space and time.Einstein developed a new view of time first and then space."
    },
    {
        id: 2,
        img: client_2,
        h2: "Regina Miles",
        span: "Designer",
        para: "This proved to be impossible using the traditional concepts of space and time.Einstein developed a new view of time first and then space.This proved to be impossible using the traditional concepts of space and time.Einstein developed a new view of time first and then space."
    },
    {
        id: 3,
        img: client_3,
        h2: "Regina Miles",
        span: "Designer",
        para: "This proved to be impossible using the traditional concepts of space and time.Einstein developed a new view of time first and then space.This proved to be impossible using the traditional concepts of space and time.Einstein developed a new view of time first and then space."
    },
]

function ClientCard() {
    return (
        <section className='bg-secondary-color-2 pt-[75px] pb-[120px]'>
            <div className="flex justify-center ">
                <div>
                    <div className='mb-[60px] w-[250px] md:w-[864px] h-[205px] flex flex-col justify-center items-center text-center mx-auto'>
                        <h1 className='font-bold text-[40px] leading-[57px] text-white'>What Clients Say</h1>
                        <p className='font-medium text-[14px] leading-[20px] text-white w-[230px] md:w-[470px] mt-[10px]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[00px] lg:gap-[50px]'>
                        {client?.map(card => {
                            return <Client key={card.id} img={card.img} h2={card.h2} span={card.span} para={card.para} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientCard

function Client({ img, h2, span, para }) {
    return (
        <div className='bg-white h-[408px] md:h-[350px] lg:h-[300px] w-[325px] md:w-[270px] lg:w-[350px] mx-auto py-[30px] pl-[80px] pr-[40px] md:pl-[60px] pr:[20px] relative'>
            <div className='absolute top-[30px] left-[-10%]'>
                <img className='md:size-[70px] lg:size-[90px]' src={img} alt={img} />
            </div>
            <div>
                <h2 className='font-bold text-[24px] md:text-[20px] leading-[32px] text-text-color'>{h2}</h2>
                <span className='font-semibold text-[14px] md:text-[10] leading-[24px] text-second-text-color'>{span}</span>
                <div className='flex gap-2 my-[15px]'>
                    <span><img src={start_1} alt={start_1} /></span>
                    <span><img src={start_1} alt={start_1} /></span>
                    <span><img src={start_1} alt={start_1} /></span>
                    <span><img src={start_1} alt={start_1} /></span>
                    <span><img src={start_2} alt={start_2} /></span>
                </div>
            </div>
            <p className='font-medium text-[14px] md:text-[10px] leading-[20px] text-second-text-color'>{para}</p>
        </div>
    )
}