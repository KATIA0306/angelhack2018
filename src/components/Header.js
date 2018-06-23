import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/"><a className="navbar-brand" href="#">YouCanInfo</a></Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to="/schools"><a className="nav-link" href="#">About us</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/employment"><a className="nav-link" href="#">Contact</a></Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
              <button className="btn btn-primary login" type="submit">Log in</button>
              <button className="btn btn-primary login" type="submit">Sign up</button>
            </div>
        </nav>
        );
    }
}
