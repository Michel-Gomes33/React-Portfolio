import Navigation from "./Navigation";
import "../styles/header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>Michel Gomes</h1>
            <Navigation />
            <a className="cta" href="#"><button><NavLink to="Contact">Contact</NavLink></button></a>
        </header>
    );
};

export default Header ;