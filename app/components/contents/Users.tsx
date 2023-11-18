'use client'

import { IGithub } from "@/app/types/github"
import { useSelector } from "react-redux"
import MenuUser from "./MenuUser"

const Users = () => {
  const users = useSelector((state: IGithub) => state?.github.users)

  return (
    <div className="users">
      {users?.map((user, index) => (
        // <div key={index}>{user.login}</div>
        <MenuUser key={index} user={user} />
      ))}
    </div>
  )
}

export default Users