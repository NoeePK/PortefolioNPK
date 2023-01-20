import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer>
            <Link to="">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                <h3>linkedIn</h3>
            </Link>
            <Link to="">
                <FontAwesomeIcon icon="fa-brands fa-square-github" />
                <h3>github</h3>
            </Link>
        </footer>
    );
};

export default Footer;
