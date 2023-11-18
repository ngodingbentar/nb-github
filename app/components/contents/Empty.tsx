'use client'
import { FaGithub } from "react-icons/fa"
import { useSelector } from "react-redux"

const EmptyState = () => {
  const error = useSelector((state: any) => state?.github?.error)
  return (
    <div className="content__empty">
      <div className="w-full text-center items-center justify-center">
        <div className="justify-center flex mb-4">
          <FaGithub size={100} color="#16a34a" />
        </div>
        <div>
          {error ? (
            <div className="text-red-500 font-bold ">
              {error}
            </div>
          ) : (
            <div>
              Search Github User
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmptyState