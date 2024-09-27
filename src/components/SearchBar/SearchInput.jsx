
import React, {useState} from 'react'

const SearchInput = ( {onSearch} ) => {

const [input, setInput] = useState('')

const submitHandler = (e)=>{
  e.preventDefault()

  onSearch(input);
}

  return <form onSubmit={submitHandler}>
    <input type="text" placeholder='Procure por um país...' value={input} onChange={(e) => setInput(e.target.value)} />
  </form>
}

export default SearchInput
