import { IUser } from "@/app/types/github"
import { useState } from "react"
import MenuRepo from "./MenuRepo"
import axios from "axios"

const MenuUser = ({ user }: { user: IUser}) => {
  const[active, setActive] = useState(false)
  const[repo, setRepo]= useState([])

  const handleClick = async () => {
    console.log(user)
    if (!active) {
      try {
        await axios.get(`https://api.github.com/users/${user.login}/repos?per_page=5`)
        .then((res) => {
          console.log(res.data)
          setRepo(res.data)
        })
      } catch (error) {
        
      }
    }
    setActive(!active)
  }
  return (
    <>
      <button className="user__item" onClick={handleClick}>
        <div>{user.login}</div>
      </button>
      <div className="ml-4">
        {active && <MenuRepo repo={repo} />}
      </div>
    </>
  )
}

export default MenuUser