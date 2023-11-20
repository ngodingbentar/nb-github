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
    if (!active) {
      try {
        dispatch(setLoading(true))
        await axios.get(`https://api.github.com/users/${user.login}/repos`)
        .then((res) => {
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
      <button className={active ? "user__item user--active" : "user__item"} onClick={handleClick}>
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
      <div className="user__repo">
        {(active && !isLoading) && <MenuRepo repo={repo} />}
      </div>
    </>
  )
}

export default MenuUser