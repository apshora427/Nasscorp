import map from '../assets/map.png'
import ContactFrom from './ContactFrom'

const ContactCard = () => {
    return (
        <section className='bg-dark-background-color pt-[130px] '>
            <div className="container">
                <div className='grid grid-cols-1 gap-[80px]'>
                    <div className='w-[335px] mx-auto'>
                        <h1 className='font-bold text-[40px] leading-[57px] text-white '>We Have Branches All Over The World</h1>
                        <p className='font-medium text-[14px] leading-[20px] text-white mt-[15px] '>The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th century, which gave some indications about how small things do behave, produced an increasing confusion which was Heisenberg, and Born.</p>
                    </div>
                    <div>
                        <img className='w-[400px] mx-auto' src={map} alt="" />
                    </div>
                </div>
            </div>
            <ContactFrom/>
        </section>
    )
}

export default ContactCard