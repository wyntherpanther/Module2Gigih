import React from "react";
import Header from "../../components/header/header";
import Description from "../../components/description";
import {Provider} from 'react-redux';
import  store  from "../../components/token/store";

const Playlist = () => {
      return (
          <Provider store= {store}>
          <Header
          realHeader={<Description/>}
          />
          </Provider>
      );
};
  
export default Playlist;

