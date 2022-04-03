const FormSubmission = ({ user, handleFormChange, handleFormSubmit }) => {

    return (
        <form className="songForm" onSubmit={handleFormSubmit}>
            <ul>
                <li>
                    <h1 className="formHeader">Submission.</h1></li>
                <li><label className="formName" htmlFor="nameInput">Song Title</label>
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
                    /></li>
                <li>
                    <label className="formName" htmlFor="descInput">Song Description</label>
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
                </li>
                <li>
                    <div className="submitButt">
                        <input id="button1" className="buttonTemplate btn-message1" value="Submit" type="submit" />
                    </div>
                </li>
            </ul>
        </form>
    )
}

export default FormSubmission