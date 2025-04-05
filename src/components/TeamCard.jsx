import team_card_1 from '../assets/team_card_1.png'
import team_card_2 from '../assets/team_card_2.png'
import team_card_3 from '../assets/team_card_3.png'
import team_card_4 from '../assets/team_card_4.png'

const card = [
    {
        id: 1,
        img: team_card_1,
        span: "CEO",
        h6: "Ashley Fletcher",
        para: "the quick fox jumps over the lazy dog"
    },
    {
        id: 2,
        img: team_card_2,
        span: "Consultant",
        h6: "Rodney Stratton",
        para: "the quick fox jumps over the lazy dog"
    },
    {
        id: 3,
        img: team_card_3,
        span: "CO Founder",
        h6: "Avie Beaton",
        para: "the quick fox jumps over the lazy dog"
    },
    {
        id: 4,
        img: team_card_4,
        span: "Consultant",
        h6: "Ben Jonson",
        para: "the quick fox jumps over the lazy dog"
    },
]

const TeamCard = () => {
    return (
        <section className='bg-[#fafafa] pt-[75px] pb-[30px]'>
            <div className='container'>
                <div>
                    <div className='mb-[60px] w-[250px] md:w-[760px] h-[205px] flex flex-col justify-center items-center text-center mx-auto'>
                        <h1 className='font-bold text-[40px] leading-[57px] text-text-color '>Meet Our Team</h1>
                        <p className='font-medium text-[14px] leading-[20px] text-text-color w-[230px] md:w-[470px] mt-[10px] '>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] md:gap-[100px]'>
                        {card?.map(card => {
                            return <Team key={card.id} img={card.img} h6={card.h6} span={card.span} para={card.para} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamCard


const Team = ({ img, span, h6, para }) => {
    return (
        <div className='bg-[#fff] px-[100px] lg:px-[50px] py-[30px] w-[335px] lg:w-[240px] mx-auto mb-[30px]'>
            <div>
                <img src={img} alt={img} />
            </div>
            <div className='text-center'>
                <span className='font-semibold text-[14px] leading-[24px] text-primary-color my-[5px]'>{span}</span>
                <h6 className='font-bold text-[14px] leading-[24px] text-text-color mb-[5px]'>{h6}</h6>
                <p className='font-medium text-[14px] leading-[20px] text-second-text-color w-[150px]'>{para}</p>
            </div>
        </div>
    )
}
