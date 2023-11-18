'use client'
import { FaGithub } from "react-icons/fa"

const EmptyState = () => {
  return (
    <div className="content__empty">
      <div className="w-full text-center items-center justify-center">
        <div className="justify-center flex mb-4">
          <FaGithub size={100} color="#22c55e" />
        </div>
        <div>
          Search Github User
          {/* {users?.length > 0 && users?.map((user, index) => (
            <div key={index}>{user.login}</div>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default EmptyState