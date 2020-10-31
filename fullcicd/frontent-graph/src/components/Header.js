import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {



    render() {
        return (


            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src="chartjs-logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                    Bootstrap
                     </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">


                            <li className="nav-item">
                                <Link className="nav-link" to="/test">test  </Link>

                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">   Home </Link>

                            </li>
                        </ul>

                    </div>

                </nav>
            </div>

        )

    }

}


export default Header