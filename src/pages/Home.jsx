import { Link } from 'react-router-dom'
import homeImg from '../assets/homeImage.png'

function Home() {
  return (
    <div className='flex-grow h-screen'>
        <img src={homeImg} className=' h-full z-10'/>
        <div className='text-white w-full absolute top-[50%] text-center left-[50%] translate-x-[-50%] translate-y-[-35%]'>
            <h1 className='text-4xl leading-normal'>You got the travel plans, we got the travel vans.</h1>
            <p className='mt-4 text-xl mx-2'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
           <Link to="vans"><button className='bg-orange-400 mt-4 px-8 py-4 rounded-lg text-lg hover:bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 transition-all duration-300 ease-in-out'>Find your van</button></Link> 
       </div>
       </div>
  )
}

export default Home