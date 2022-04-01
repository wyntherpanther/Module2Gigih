const Gif = ({images, title, import_datetime, id}) => {
      return(
        <div className="container">
          <div className= "imgContainer">
            <img src={images.original.url} alt="gifImg" />
          </div>
        <div className="description">
        <h1>{title}</h1>
        <h2>{import_datetime}</h2>
        <h3>{id}</h3>

        </div>
        </div>
      );
};

export default Gif;