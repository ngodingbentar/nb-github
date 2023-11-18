'use client'

import { useSelector } from "react-redux"
import EmptyState from "./Empty"
import Users from "./Users"
import { IGithub } from "../../types/github"

const Content = () => {
  const users = useSelector((state: IGithub) => state?.github.users)

  return (
    <div className='content'>
      {users.length > 0 ? (
        <Users />
      ): (
        <EmptyState />
      )}
    </div>
  )
}

export default Content