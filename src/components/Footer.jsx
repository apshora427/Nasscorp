import facebook from '../assets/facebook.png'
import instragram from '../assets/instragram.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'


const Footer = () => {
    return (
        <footer className='mt-[80px] lg:mt-[420px] bg-[#fafafa] pt-[100px] pb-[40px]'>
            <div className="container">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-[250px]'>
                    <div className='flex flex-col gap-[25px] w-[241px] mx-auto mb-[30px]'>
                        <h3 className="font-bold text-[24px] leading-[32px] text-text-color">Get In Touch</h3>
                        <p className="font-normal text-[14px] leading-[20px] text-second-text-color w-[213px]">the quick fox jumps over the lazy dog</p>
                        <div className='flex gap-[20px]'>
                            <img src={facebook} alt={facebook} />
                            <img src={instragram} alt={instragram} />
                            <img src={twitter} alt={twitter} />
                            <img src={youtube} alt={youtube} />
                        </div>
                    </div>

                    <div className='flex flex-col gap-[25px] w-[241px] mx-auto mb-[30px]'>
                        <h3 className='font-bold text-[24px] leading-[32px] text-text-color'>Company info</h3>
                        <ul className='flex flex-col gap-[10px]'>
                            <li> {<Footer_item text={"About Us"} />} </li>
                            <li> {<Footer_item text={"Carrier"} />} </li>
                            <li> {<Footer_item text={"We are hiring"} />} </li>
                            <li> {<Footer_item text={"Blog"} />}</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-[25px] w-[241px] mx-auto mb-[30px]'>
                        <h3 className='font-bold text-[24px] leading-[32px] text-text-color'>Features</h3>
                        <ul className='flex flex-col gap-[10px]'>
                            <li> {<Footer_item text={"Business Marketing"} />} </li>
                            <li> {<Footer_item text={"User Analytic"} />} </li>
                            <li> {<Footer_item text={"Live Chat"} />} </li>
                            <li> {<Footer_item text={"Unlimited Support"} />}</li>

                        </ul>
                    </div>

                    <div className='flex flex-col gap-[25px] w-[241px] mx-auto mb-[30px]'>
                        <h3 className='font-bold text-[24px] leading-[32px] text-text-color'>Resources</h3>
                        <ul className='flex flex-col gap-[10px]'>
                            <li> {<Footer_item text={"About Us"} />} </li>
                            <li> {<Footer_item text={"Carrier"} />} </li>
                            <li> {<Footer_item text={"We are hiring"} />} </li>
                            <li> {<Footer_item text={"Blog"} />}</li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

const Footer_item = ({ text }) => {
    return (
        <li className="font-semibold text-[14px] leading-[24px] text-second-text-color">{text}</li>
    )
}

export default Footer