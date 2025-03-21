import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>Michel Gomes</h1>
            <Navigation />
            <NavLink to="/contact" className="cta-button">Contact</NavLink>
        </header>
    );
};

export default Header;
