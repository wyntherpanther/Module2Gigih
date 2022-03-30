import { useState, useEffect } from "react";
const Item = ({ album, name, artists, uri }) => {

  const [text, setText] = useState("Select");


  const change = (text) => {
    setText(text);
  }

  useEffect(() => {
    const playlist = localStorage.getItem("uri");
    if (playlist === "selected") {
      change("Deselect")
    }
  }, []);

  const changing = () => {
    if (text === "Select") {
      change("Deselect")
      localStorage.setItem(uri, "selected")
    }
    else {
      change("Select")
      localStorage.setItem(uri, "")
    }
  }

  return (

    <div className="carousel-inner">
      <div className="favoriteSongs carousel-item active">
        <div className="wrapper">
          <img className="album" id="albumImage" src={album.images[0].url} alt="albumImage" />
          <h1 className="songTitle">{name}</h1>
          <h2 className="songArtist">{artists[0].name}</h2>
          <button className="playSong buttonTemplate" onClick={() => { changing() }}> {text} </button>
        </div>
      </div>
    </div>
  );
};

export default Item;