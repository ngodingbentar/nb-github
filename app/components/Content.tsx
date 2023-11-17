
import { FaGithub } from "react-icons/fa"
const Content = () => {
  return (
    <div className='content'>
      <div className="content__empty flex">
        <div className="w-full text-center items-center justify-center">
          <div className="justify-center flex mb-4">
            <FaGithub size={100} color="#22c55e" />
          </div>
          <div>
            Search Github User
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content