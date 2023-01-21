import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const Footer = () => {
    return (
        <footer>
            <Link to="">
                <img src={linkedin} />
                <h3>linkedIn</h3>
            </Link>
            <Link to="">
                <img src={github} />
                <h3>github</h3>
            </Link>
        </footer>
    );
};

export default Footer;
