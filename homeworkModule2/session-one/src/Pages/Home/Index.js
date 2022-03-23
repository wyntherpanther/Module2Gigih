import React from "react";
import Header from "../../components/header/header.js";
import Item from "../../components/PlaylistItem/Item.js";
import data from '../../module.js';

const Playlist = () => {
      return (
          <Header>  
              <Item 
              img= {data.album.images[0].url} 
              title= {data.name} 
              name={data.artists[0].name}/> 
            </Header>     
      );
};
  
export default Playlist;

