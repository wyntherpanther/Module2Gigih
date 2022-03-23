const Item = ({img, title, name}) => {
    return(

        <div className="carousel-inner">
          <div className="favoriteSongs carousel-item active">
            <div className="wrapper">
              <img className="album" id="albumImage" src={img} alt="albumImage"/>
        
        {/* Edit <code>src/App.js</code> and save to reload. */}
              <h1 className="songTitle">{title}</h1>
              <h2 className="songArtist">{name}</h2>
              <a href="https://reactjs.org" className="playSong buttonTemplate"><span>&#x266A;</span> Select</a>
              </div>
          </div>
        </div>
);
};

export default Item;