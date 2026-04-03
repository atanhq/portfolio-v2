const ToggleMenu = ({ isOpen, toggle }) => {

    return (
        <>
        <div className="menu">
            <button
                className="menu-title" 
                onClick={toggle}>
            {!isOpen ? "Menu" : "X"}
            </button>
        </div>

            <nav className={`menu-container ${isOpen ? "active" : "inactive"}`}>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Github</li>
                </ul>

                <div className="lets-chat">
                    <img src="https://placehold.co/40x40/000000/ffffff" />
                    <p>Let's chat<em>!</em></p>
                    <p>Copy Email</p>
                </div>
            </nav>
        </>
    )
}

export default ToggleMenu