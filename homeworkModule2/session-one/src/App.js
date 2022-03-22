// import logo from './logo.svg';
import './App.css';
import data from './module.js';


function App() {
  return (
    <div className="App">

      
      <header className="App-header">
        <div className="main2">
      <h1 className="header">
        Wynnie's <br />
        Playlist.
      </h1>
      <p className="desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        sequi, qui id ipsam reprehenderit, saepe vitae eveniet, velit numquam
        architecto molestiae? Quos nostrum saepe excepturi iste assumenda itaque
        numquam temporibus? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Assumenda, sint. Modi laudantium iure animi. Amet ipsum ex,
        sapiente nesciunt inventore perferendis deleniti saepe cumque aliquam
        nam quo, esse at laudantium.
      </p>
      <div
        className="Songs carousel slide"
        id="carouselExampleControls"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="favoriteSongs carousel-item active">
            <div className="wrapper">
              <img className="album" id="albumImage" src={data.album.images[0].url} alt="albumImage"/>
        
        {/* Edit <code>src/App.js</code> and save to reload. */}
              <h1 className="songTitle">{data.name}</h1>
              <h2 className="songArtist">{data.artists[0].name}</h2>
              <a href="https://reactjs.org" className="playSong buttonTemplate"><span>&#x266A;</span> Select</a>
              </div>
          </div>
        </div>
        </div>
        


        </div>
      </header>
      
    </div>
  );
}

export default App;
