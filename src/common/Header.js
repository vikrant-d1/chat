import React from 'react';
import { Link } from "react-router-dom";

 const Header = (props) => {

    return(
        <div>
            <p>@Social app<sup>TM</sup></p>
            <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default Header