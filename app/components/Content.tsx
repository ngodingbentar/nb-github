'use client'

import { FaGithub } from "react-icons/fa"
import { useSelector } from "react-redux"

interface IUser {
  login: string,
  id: number,
  avatar_url: string,
  type: string
}
interface IGithub {
  github: {
    data: number
    users: IUser[]
  }
}
const Content = () => {
  const users = useSelector((state: IGithub) => state?.github.users)

  return (
    <div className='content'>
      <div className="content__empty flex">
        <div className="w-full text-center items-center justify-center">
          <div className="justify-center flex mb-4">
            <FaGithub size={100} color="#22c55e" />
          </div>
          <div>
            Search Github User
            {users?.length > 0 && users?.map((user, index) => (
              <div key={index}>{user.login}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content