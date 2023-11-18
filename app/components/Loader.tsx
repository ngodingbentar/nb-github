'use client'

const Loader = () => {
  return (
    <div className="loader flex justify-center items-center">
      <div className="lds-ellipsis text-white text-xl">
        <div className="flex items-center space-x-2">
          <div aria-label="Loading..." role="status">
            <svg width="50" height="50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" className="animate-spin w-8 h-8 stroke-white">
              <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
              </path>
            </svg>
          </div>
          <span className="font-medium text-white">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Loader