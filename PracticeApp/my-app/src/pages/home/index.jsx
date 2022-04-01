// import React from "react";
import { useState } from "react";
import axios from 'axios';
import Gif from "../../components/Gif/index.js";
import SearchBar from "../../components/form/form.jsx";

const Search = () => {

  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=vYaoDT4GVtdV6b3VZtt2yq1ZbYh2Zj3E`, {
    })
    setGifs(data.data)
  }

  const handleOnChange = (e) => {
    setKeyword(e.target.value);
  }

  return (
    <div className='search-section'>
      <h1 className="Header">GIfsss</h1>
      <div className='search-item'>

        <SearchBar
          gif={gifs}
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
        />

        <div>
          {gifs.length > 0 &&
            (gifs.map((gif, id) => <Gif {...gif} key={id} />))
          }
        </div>

      </div>
    </div>
  );
}



export default Search;