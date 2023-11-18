'use client'

import { FaRegStar } from "react-icons/fa";

interface IRepo {
  id: number
  name: string
  html_url: string
  description: string
  stargazers_count: number
}
const MenuRepo = ({repo}: {repo: IRepo[]}) => {
  console.log(repo)
  return (
    <>
      {repo && repo?.map((item, index) => (
        <div key={index} className="repo__card">
          <div className="card__header">
            <a href={item.html_url} target="_blank">{item.name}</a>
            <div className="flex justify-center items-center">
              <span className="mr-2">
                {item.stargazers_count}
              </span>
              <FaRegStar />
            </div>
          </div>
          <div>{item.description || '-'}</div>
        </div>
      ))}
    </>
  )
}

export default MenuRepo