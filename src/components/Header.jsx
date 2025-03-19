import Navigation from "./Navigation";
import "../styles/header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>Michel Gomes</h1>
            <Navigation />
            <a className="cta" href="#"><button>Contact</button></a>
        </header>
    );
};

export default Header ;