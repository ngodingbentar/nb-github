'use client'
import { FaGithub } from "react-icons/fa"

const EmptyState = () => {
  return (
    <div className="content__empty">
      <div className="w-full text-center items-center justify-center">
        <div className="justify-center flex mb-4">
          <FaGithub size={100} color="#16a34a" />
        </div>
        <div>
          Search Github User
        </div>
      </div>
    </div>
  )
}

export default EmptyState