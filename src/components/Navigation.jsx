const Navigation = () => {
    return (
    <nav>
        <ul>
            <li><Navlink to="/" end>About ME</Navlink></li>
            <li><Navlink to="/portfolio">Portfolio</Navlink></li>
            <li><Navlink to ="/contact">Contact</Navlink></li>
            <li><Navlink to="resume">Resume</Navlink></li>
        </ul>
    </nav>
    );
};

export default Navigation;