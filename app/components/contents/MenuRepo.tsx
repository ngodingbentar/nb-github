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
  return (
    <>
      {repo && repo?.map((item, index) => (
        <a key={index} href={item.html_url} className="repo__card" target="_blank">
          <div className="card__header">
            <p className="font-bold">{item.name}</p>
            <div className="flex justify-center items-center py-1">
              <span className="mr-2">
                {item.stargazers_count}
              </span>
              <FaRegStar />
            </div>
          </div>
          <div className="text-gray-500">{item.description || '-'}</div>
        </a>
      ))}
    </>
  )
}

export default MenuRepo