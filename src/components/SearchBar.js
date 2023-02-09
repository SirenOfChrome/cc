import React, { useState } from "react";

const SearchBar = (props) => {
const { searchTerm, setSearchTerm, handleSort } = props;

const handleChange = (event) => {
setSearchTerm(event.target.value);
};

const handleSortChange = (event) => {
handleSort(event.target.checked);
};

return (
<div className="SearchBar" style={{ textAlign: "center" }}>
<input
     type="text"
     placeholder="Search for a planeteer"
     value={searchTerm}
     onChange={handleChange}
   />
<label>
Sort by Age:
<input type="checkbox" onChange={handleSortChange} />
</label>
</div>
);
};

export default SearchBar;