import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
    <nav>
        <ul className="nav_links">
            <li><NavLink to="/" end>About Me</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="resume">Resume</NavLink></li>
        </ul>
    </nav>
    );
};

export default Navigation;