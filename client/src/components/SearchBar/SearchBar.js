import React from 'react'
import searchIcon from './SearchIcon.png'
import './SearchBar.css'

export const SearchBarComponent = () => {
     return(
         <div className="searchbar">
              <button className="search-btn">
                 <img src={searchIcon} alt ="searchIcon" />
             </button>
             <input className="input-fld"></input>
            
         </div>
     );
}


