import React from 'react'
import { BiBell, BiSearch } from "react-icons/bi";


const Navbar = () => {

    return (
        <React.Fragment>
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="/home">Logo</a>
                <form class="form-inline">
                    <BiSearch/>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <div>
                <BiBell/>
                <img class="img2" src="https://www.gstatic.com/webp/gallery3/2.png" alt="profile1" />
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;