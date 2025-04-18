
import BusinessCard from '../components/BusinessCard'
import ClientCard from '../components/ClientCard'
import ContactCard from '../components/ContactCard'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import TeamCard from '../components/TeamCard'
import VideoPlay from '../components/VideoPlay'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
         <Hero/> 
         <BusinessCard/>
         <VideoPlay/>
         <ClientCard/>
         <TeamCard/>
         <ContactCard/>
         <Footer/>
    </div>
  )
}

export default Home