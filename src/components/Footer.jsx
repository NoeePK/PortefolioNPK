import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const Footer = () => {
    return (
        <footer>
            <Link to="" className="logo-style">
                <img src={linkedin} alt="Page LinkedIn" />
                <h3>linkedIn</h3>
            </Link>
            <Link to="" className="logo-style">
                <img src={github} alt="Page GitHub" />
                <h3>github</h3>
            </Link>
        </footer>
    );
};

export default Footer;
