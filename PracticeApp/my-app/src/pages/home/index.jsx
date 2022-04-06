// import React from "react";
import { useState } from "react";
import axios from 'axios';
import Gif from "../../components/Gif/index.js";
import SearchBar from "../../components/form/form.jsx";
import { useSelector, useDispatch } from "react-redux";
import { search } from "../../components/redux/action.jsx";
// import { Sample } from "../../router.js";


const Search = () => {
  const currentAmount = useSelector((state) => state.account.value);
  const [gifs, setGifs] = useState([]);
  const dispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${currentAmount}&api_key=vYaoDT4GVtdV6b3VZtt2yq1ZbYh2Zj3E`, {
    })
    setGifs(data.data)
  }


  return (
    <div className='search-section'>
      <h1 className="Header">GIfsss {currentAmount}</h1>

      <div >
        <div className="searchBar">
          <SearchBar
            gif={gifs}
            handleSubmit={handleSubmit}
            handleChange={(e) => {
              dispatch(search(e.target.value))
            }}
          />
        </div>

        <div className='search-item'>
          {gifs.length > 0 &&
            (gifs.map((gif, id) => <Gif {...gif} key={id} />))
          }
        </div>

      </div>
    </div>
  );
}



export default Search;