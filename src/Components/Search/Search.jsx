import useDebounce from "../../Hooks/useDebounce"
import "./Search.css"


function Search({updateSearchTerm}) {
  const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value));

  return (
    <div className="search-input-container">

        <input className="search-input"
         type="text"
         placeholder="gonna search them all..."
         onChange={debounceUpdateSearch}
         />
    </div>
  )

}

export default Search