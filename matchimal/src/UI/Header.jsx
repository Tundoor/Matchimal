import { Link } from "react-router-dom"

function Header() {

    return (
        <>
            <header className="header" id="header">
                <nav id="nav-bar">
                    <div className="logo" id="logo">
                        <img src="./src/assets/favicon/favicon-32x32.png" alt="Matchimal Logo" id="logo-img" />
                        <h1 id="logo-title">Matchimal</h1>
                    </div>
                    <Link id="nav-link" to="./personal"><img src="./src/assets/icons/icons8-user-30.png"></img></Link>
                </nav>
            </header>
        </>
    )
}

export default Header