import React from "react";
import Header from "../../components/header/header.js";
import Item from "../../components/PlaylistItem/Item.js";
import data from '../../module.js';

const Playlist = () => {
      return (
          <Header>  
            {data.map((e)=> <Item {...e}/>)}
            
            </Header>     
      );
};
  
export default Playlist;

