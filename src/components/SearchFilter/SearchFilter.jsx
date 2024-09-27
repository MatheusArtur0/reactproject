import React from 'react'

const SearchFilter = ({ onSelect }) => {
  const selectHandler = e => {
    const regionName = e.target.value;
    onSelect(regionName);
  }

  return <select onChange={selectHandler}>
    <option className="option">Filtre sua pesquisa por região</option>
    <option className="option" value="Africa">África</option>
    <option className="option" value="America">América</option>
    <option className="option" value="Asia">Ásia</option>
    <option className="option" value="Europe">Europa</option>
    <option className="option" value="Oceania">Oceania</option>
  </select>
}

export default SearchFilter
