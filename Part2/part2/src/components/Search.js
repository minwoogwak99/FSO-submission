import React from 'react'

const Search = ({filterInfo, filterValue, handleFilterValue}) => {
  return (
    <div>
      <h3>Search</h3>
      <div>
        <form onSubmit={filterInfo}>
          <div>
            filter: <input type='text' value={filterValue} onChange={handleFilterValue}/>
            <button type='submit'>Search</button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Search