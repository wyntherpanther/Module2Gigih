import { ImageList, Typography } from "@mui/material";
interface props {
    Selection: JSX.Element | JSX.Element[]
}
const SearchBody = ({ Selection }: props) => {
    return (
        <div className="Songs">
            <Typography gutterBottom variant="h3" component="div" >
                Search Result.
            </Typography>
            <ImageList
                sx={{
                    gridAutoFlow: "column",
                    gridTemplateColumns: "repeat(max(300px, 1fr))",
                    gridAutoColumns: "repeat(max(300px, 1fr),5)",
                    mx: 5
                }}
                gap={20}
            >
                {Selection}
            </ImageList>
        </div>
    )
}
export default SearchBody