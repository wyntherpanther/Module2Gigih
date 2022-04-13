import { Card, CardActionArea, CardContent, CardMedia, ImageListItem, Typography } from "@mui/material";

const Item = ({ track, onSelectedTrack, selected }) => {
  const { album, name: songName, artists, isSelected, } = track;
  return (

    <ImageListItem >
      <Card sx={{ width: 180, my: 2, textAlign: "center" }}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="180px"
            image={album.images[0].url}
            alt={songName}
          />
          <CardContent sx={{ p: "10px 5px 8px 5px" }}>
            <Typography gutterBottom variant="h5" component="div">
              <span className="songTitle">{album.name}</span>
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              <h2 className="songArtist">{artists.map(artist => artist.name).join(', ')}</h2>
            </Typography>
            <button className="playSong " onClick={() => onSelectedTrack(track)} > {isSelected || selected ? "Deselect" : "Select"} </button>
          </CardContent>
        </CardActionArea>
      </Card>
    </ImageListItem>


  );
};

export default Item;