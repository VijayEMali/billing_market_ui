import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home">OnlineShop</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>                          
                            <li>
                                <NavLink className="nav-link active" to="/RegisterProduct">Register-Product</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link active" to="/UpdateProduct/:id">Update-Product</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Category
                                            </NavLink>
                                            <ul className="dropdown-menu " aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><NavLink className="dropdown-item" to="/grocery">Grocery</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/appliances">Appliances</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/beautyProducts">Beauty Products</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link disabled" to="#signup" tabindex="-1" aria-disabled="true">Login/Signup</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

