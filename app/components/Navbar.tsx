'use client';

import { BiSearch } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        Github Repositories Explore
      </div>
      <div className="navbar__search">
        <input className="focus:ring-2 focus:ring-green-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-2 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Search User..." />
      </div>
      <div className="navbar__btn">
        <button
          className='flex items-center justify-center'
          onClick={() => { }}>
          <span className="mr-2">
            Search
          </span>
          <BiSearch size={20} />
        </button>
      </div>
      <div className="navbar__result">
        <p>
         Showing users
        </p>
      </div>
    </div>
  )
}

export default Navbar