import { ImageList, Typography } from "@mui/material";
interface props {
    Selection: JSX.Element | JSX.Element[]
}
const SelectBody = ({ Selection }: props) => {
    return (
        <div className="selectedSongs">
            <Typography gutterBottom variant="h4" component="div" sx={{ mb: 3 }}>
                Selected.
            </Typography>
            <ImageList
                sx={{
                    gridAutoFlow: "column",
                    gridTemplateColumns: "repeat(max(300px, 1fr))",
                    gridAutoColumns: "max(300px, 1fr)",
                    mx: 5
                }}
                gap={20}
            >
                {Selection}
            </ImageList>
        </div>
    )
}
export default SelectBody