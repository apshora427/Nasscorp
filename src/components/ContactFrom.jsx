import contact_image from '../assets/contact_image.png'
import arrow from '../assets/arrow.png'

function ContactFrom() {
  return (
    <section className='mt-[110px] bg-[#fff] pb-[40px] md:pb-0 '>
      
      <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_5fr] md:gap-[0px]'>
      <div>
        <img className='w-[900px] md:w-[700px] lg:w-[400px] h-[260px] md:h-[700px] object-cover' src={contact_image} alt="" />
      </div>
        <div className='flex justify-center'>
          <form className='' action="">
          <h2 className='font-bold text-[40px] leading-[57px] text-text-color w-[243px] h-[114px] my-[40px]'>Get A Free Quote Here</h2>
            <label
              htmlFor="name"
              className='font-semibold text-[14px] leading-[24px] text-text-color'
            >
              Name*
            </label>
            <br/>
            <input
              type="text"
              placeholder='Full Name'
              className='bg-[#f9f9f9] text-[14px] leading-[28px] font-normal text-second-text-color w-[311px] md:w-[360px] lg:w-[525px] py-[11px] px-[21px]  border-[2px] border-dark-muted-color rounded-[5px] mt-[10px] mb-[5px]'
            /> 
            <br />
            <label
              htmlFor="name"
              className='font-semibold text-[14px] leading-[24px] text-text-color'
            >
             Email*
            </label>
            <br/>
            <input
              type="text"
              placeholder='example@gmail.com'
              className='bg-[#f9f9f9] text-[14px] leading-[28px] font-normal text-second-text-color w-[311px] md:w-[360px] lg:w-[525px] py-[11px] px-[21px] border-[2px] border-dark-muted-color rounded-[5px] mt-[10px] mb-[5px]'
            /> 
            <br />
            <label
              htmlFor="name"
              className='font-semibold text-[14px] leading-[24px] text-text-color'
            >
              Department *
            </label>
            <br/>
            <input
              type="text"
              placeholder='Please Select'
              className='bg-[#f9f9f9] text-[14px] leading-[28px] font-normal text-second-text-color w-[311px] md:w-[360px] lg:w-[525px] py-[11px] px-[21px] border-[2px] border-dark-muted-color rounded-[5px] mt-[10px] mb-[5px]'
            /> 
            <br />
            <label
              htmlFor="name"
              className='font-semibold text-[14px] leading-[24px] text-text-color'
            >
              Time *
            </label>
            <br/>
            <input
              type="text"
              placeholder='4:00 Available'
              className='bg-[#f9f9f9] text-[14px] leading-[28px] font-normal text-second-text-color w-[311px] md:w-[360px] lg:w-[525px] py-[11px] px-[21px] border-[2px] border-dark-muted-color rounded-[5px] mt-[10px] mb-[5px]'
            />
            <br />
            <br />
            <button className='bg-primary-color text-white px-[85px] md:px-[110px] lg:px-[190px] py-[15px] rounded-[5px]'>
              <a className='font-bold text-[14px] leading-[28px]' href="#">Book Appointment</a>
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ContactFrom