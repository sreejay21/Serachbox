import { useState } from "react";
import "../SearchBox/SearchBar.css";
var data = require("./Mock_country_data.json");

 function SearchBar() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);

    // console.log("search ", searchTerm);
  };

  return (
    <div className="App">
      <h1>Country Search Box</h1>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search Country </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const countryName = item.name.toLowerCase();

              return (
                searchTerm &&
                countryName.startsWith(searchTerm) &&
                countryName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.name)}
                className="dropdown-row"
                key={item.name}
              >
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
 export default SearchBar;