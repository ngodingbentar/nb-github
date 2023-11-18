'use client'
import { FcProcess } from "react-icons/fc";

const Loader = () => {
  return (
    <div className="loader flex justify-center items-center">
      <div className="lds-ellipsis text-white text-xl">
        <div className="justify-center flex m-auto">
          <FcProcess size={40} />
        </div>
        <div className="mt-2">
          Loading...
        </div>
      </div>
    </div>
  )
}

export default Loader