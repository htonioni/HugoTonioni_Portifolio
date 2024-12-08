function NavBar() {
    return (
        <nav>
            <a className="navTitle" href="#home">Hugo Tonioni.</a>
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#cases">cases</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#about-me">about me</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
            <button>dark mode.</button>
        </nav>
    )
}

export default NavBar;

