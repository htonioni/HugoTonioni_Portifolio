import "../styles/NavBar.css"
function NavBar() {
    return (
            <nav>
                <div className="box"><a className="navTitle" href="#home">Hugo Tonioni.</a></div>
                <ul className="box">
                    <li><a href="#home">home</a></li>
                    <li><a href="#cases">cases</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#about-me">about me</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
                <div className="box">
                    <button onClick={() => {alert("Not yet implemented")}}>dark mode.</button>
                </div>

                
            </nav>
    )
}

export default NavBar;

