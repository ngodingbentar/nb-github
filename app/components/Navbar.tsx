'use client';

import { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { setUsers } from '../store/redux/github';

const Navbar = () => {
  const [search, setSearch] = useState('')
  const [searchTemp, setSearchTemp] = useState('')
  const dispatch = useDispatch()

  const doSearch = async() => {
    if (!search) {
      return
    } else {
      try {
        const res = await fetch(`https://api.github.com/search/users?q=${search}&per_page=5`)
        const data = await res.json()
        console.log(data)
        dispatch(setUsers(data?.items))
      } catch (error) {
        console.log(error)
      }
      setSearchTemp(search)
    }
  }
  return (
    <div className="navbar">
      <div className="navbar__title">
        Github Repositories Explore
      </div>
      <div className="navbar__search">
        <input
          className="focus:ring-2 focus:ring-green-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-2 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Filter projects"
          placeholder="Search User..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="navbar__btn">
        <button
          className='flex items-center justify-center w-full'
          onClick={doSearch}>
          <span className="mr-2">
            Search
          </span>
          <BiSearch size={20} />
        </button>
      </div>
      <div className="navbar__result">
        {searchTemp && (
          <p>
            Showing users for {`"${searchTemp}"`}
          </p>
        )}
      </div>
    </div>
  )
}

export default Navbar