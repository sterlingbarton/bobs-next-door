import React from "react"

function Search({searchQuery, setSearchQuery}) {

    function handleSearchChange(e){
        setSearchQuery(e.target.value)
    }

    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." value={searchQuery} onChange={handleSearchChange} />
        </div>
    );
}

export default Search;