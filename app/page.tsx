'use client'

import Image from 'next/image'
import Navbar from './components/Navbar'
import Content from './components/contents/Content'
import { useSelector } from 'react-redux'
import { IGithub } from './types/github'
import Loader from './components/Loader'

export default function Home() {
  const isLoading = useSelector((state: IGithub) => state?.github.loading)

  return (
    <div className='main'>
      {/* <Loader /> */}
      {isLoading && <Loader />}
      <span>
        <Navbar />
        <Content />
      </span>
    </div>
  )
}
