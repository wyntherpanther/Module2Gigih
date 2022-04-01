const Item = ({ track, onSelectedTrack }) => {
  const { album, name: songName, artists, isSelected } = track;
  return (


    <div className="favoriteSongs carousel-item active">
      <div className="wrapper">
        <img className="album" id="albumImage" src={album.images[0].url} alt={songName} />
        <h1 className="songTitle">{artists.map(artist => artist.name).join(', ')}</h1>
        <h2 className="songArtist">{artists[0].name}</h2>
        <button className="playSong buttonTemplate" onClick={() => onSelectedTrack(track)} > {isSelected ? "Deselect" : "Select"} </button>
      </div>
    </div>

  );
};

export default Item;