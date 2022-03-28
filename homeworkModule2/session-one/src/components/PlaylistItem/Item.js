const Item = ({album, name, artists, href}) => {
    return(

        <div className="carousel-inner">
          <div className="favoriteSongs carousel-item active">
            <div className="wrapper">
              <img className="album" id="albumImage" src={album.images[0].url } alt="albumImage"/>
        
        {/* Edit <code>src/App.js</code> and save to reload. */}
              <h1 className="songTitle">{name}</h1>
              <h2 className="songArtist">{artists[0].name}</h2>
              <a href={href} className="playSong buttonTemplate"><span>&#x266A;</span> Select</a>
              </div>
          </div>
        </div>
);
};

export default Item;