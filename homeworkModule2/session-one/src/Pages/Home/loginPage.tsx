
// import { Link } from "react-router-dom";
import TokenTaker from "../../components/token/takingToken";
import Description from "../../components/writingHeader/description";
const LoginPage = () => {


    return (
        <div className="whole">
            <TokenTaker />
            <div className="body">
                <div className="main2">
                    <Description />
                    <h2 className="header-warning">Please login</h2>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
