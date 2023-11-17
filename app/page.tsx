import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className='main'>
      <span>
        <Navbar />
        <div className='content'>
          content
        </div>
      </span>
    </div>
  )
}
