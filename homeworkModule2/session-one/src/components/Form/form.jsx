import { DialogContent, DialogContentText, DialogTitle, FormHelperText, InputLabel, Paper } from "@mui/material"

const FormSubmission = ({ user, handleFormChange, handleFormSubmit }) => {

    return (
        <Paper
            component="form"

            className="songForm" onSubmit={handleFormSubmit}
        >
            <DialogTitle>Make The Playlist Request</DialogTitle>
            <DialogContent>
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
                    minLength="10"
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


                <div className="submitButt">
                    <input id="button1" className="buttonTemplate btn-message1" value="Submit" type="submit" />
                </div>

                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>


            </DialogContent >
        </Paper >
    )
}

export default FormSubmission