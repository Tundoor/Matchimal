import { Link } from "react-router-dom"

function Header() {

    return (
        <>
            <header class="header" id="header">
                <nav id="nav-bar">
                    <div class="logo" id="logo">
                        <img src="./src/assets/favicon/favicon-32x32.png" alt="Matchimal Logo" id="logo-img" />
                        <Link to="/" id="home-link"><h1 id="logo-title">Matchimal</h1></Link>
                    </div>
                    <Link id="nav-link" to="./personal"><img src="./src/assets/icons/icons8-user-30.png"></img></Link>
                </nav>
            </header>
        </>
    )
}

export default Header