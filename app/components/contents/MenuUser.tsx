'use client'

import { useEffect } from 'react'
import { IUser } from "@/app/types/github"
import { useState } from "react"
import MenuRepo from "./MenuRepo"
import axios from "axios"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux"
import { setLoading } from '@/app/store/redux/github'

const MenuUser = ({ user }: { user: IUser}) => {
  const dispatch = useDispatch()
  const[active, setActive] = useState(false)
  const[repo, setRepo]= useState([])
  const isLoading = useSelector((state: any) => state?.github?.loading)

  useEffect(() => {
    if (isLoading) {
      setRepo([])
      setActive(false)
    }
  }, [isLoading])

  const handleClick = async () => {
    console.log(user)
    if (!active) {
      try {
        dispatch(setLoading(true))
        await axios.get(`https://api.github.com/users/${user.login}/repos?per_page=5`)
        .then((res) => {
          console.log(res.data)
          setRepo(res.data)
        })
      } catch (error) {
        console.log(error)
      }
      dispatch(setLoading(false))
    }
    setActive(!active)
  }
  return (
    <>
      <button className="user__item" onClick={handleClick}>
        <div className="flex">
          <div>
            <Image src={user.avatar_url} alt="img" width={30} height={30} />
          </div>
          <div className="m-auto pl-4 text-center justify-center items-center">{user.login}</div>
        </div>
        {active ? (
          <IoIosArrowUp />
        ) : (
          <IoIosArrowDown />
        )}
      </button>
      <div className="ml-4">
        {(active && !isLoading) && <MenuRepo repo={repo} />}
      </div>
    </>
  )
}

export default MenuUser