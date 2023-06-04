import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
   <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
   <label htmlFor='search'>
    Search
   </label>
    {/* Controled inputs are handled only by state (newone) */}
   <input  
   id='search'
   type="text"
   role='searchbox'
   placeholder='Search Items'
   value={search}
   onChange={(e)=>setSearch(e.target.value)}
   />
   </form>
  )
}

export default SearchItem