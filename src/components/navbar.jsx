import React, { Component } from "react";

// Class component
/*
class NavbBar extends Component {
  render() {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Total number of Items
            <span className="badge text-bg-secondary rounded-pill m-2">
              {this.props.totalCounters}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}
*/

// Stateless functional componetn --> sfc

const NavBar = (props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Total number of Items
          <span className="badge text-bg-secondary rounded-pill m-2">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
