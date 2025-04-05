import contact_image from '../assets/contact_image.png'

function ContactFrom() {
  return (
    <div className='mt-[110px]'>
        <div>
            <img className='w-[900px] h-[260px] object-cover' src={contact_image} alt="" />
        </div>
        <div></div>
    </div>
  )
}

export default ContactFrom