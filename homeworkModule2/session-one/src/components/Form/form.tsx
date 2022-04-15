import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, FormHelperText, InputLabel, Paper } from "@mui/material"
interface props {
    user: { name: string; description: string; }
    handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFormSubmit: React.FormEventHandler<HTMLFormElement>;
    handleClose: React.MouseEventHandler<HTMLButtonElement>;
}

const FormSubmission = ({ user, handleFormChange, handleFormSubmit, handleClose }: props) => {

    return (
        <Paper
            component="form"
            className="songForm"
            onSubmit={handleFormSubmit}
            sx={{ pb: 5 }}
        >
            <DialogTitle>Make The Playlist Request</DialogTitle>
            <DialogContent sx={{ pb: 0 }}>
                <DialogContentText sx={{ mb: 3 }}>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>

                <InputLabel htmlFor="name" >Song Title</InputLabel>
                <input
                    className="formTitle"
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    onChange={handleFormChange}
                    value={user.name}
                    required
                    minLength={10}
                    aria-describedby="my-helper-text"
                />

                <InputLabel htmlFor="description">Song Description</InputLabel>
                <input
                    className="formDescription"
                    type="text"
                    placeholder="Description"
                    id="description"
                    name="description"
                    onChange={handleFormChange}
                    value={user.description}
                    required
                />

                <DialogActions sx={{ px: 0, display: "block", textAlign: "center" }}>
                    <input id="button1" className="buttonTemplate btn-message1" value="Submit" type="submit" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>

            </DialogContent >
        </Paper >
    )
}

export default FormSubmission