import React from "react";
import Header from "../../components/header/header";
import Description from "../../components/description";
import FormSubmissionHandler from "../../components/Form/handleForm";


const Playlist = () => {
      return (
          <Header
          description={<Description/>}
          formSubmission={<FormSubmissionHandler/>}
          />
      );
};
  
export default Playlist;

