import Image from 'next/image'
import Navbar from './components/Navbar'
import Content from './components/Content'

export default function Home() {
  return (
    <div className='main'>
      <span>
        <Navbar />
        <Content />
      </span>
    </div>
  )
}
