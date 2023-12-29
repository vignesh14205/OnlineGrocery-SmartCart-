import React from "react";
import Logo1 from './Logo1.png';

class Nav extends React.Component {
  state = {
    menuToggle: false,
  };

  handleMenuToggle = () => {
    this.setState((prevState) => ({
      menuToggle: !prevState.menuToggle,
    }));
  };

  render() {
    const { menuToggle } = this.state;

    return (
      <div>
        <nav id="navbar" className={menuToggle ? "menu-open" : ""}>
          <div className="nav-wrapper">
            <div className="logo">
              <img className="img2" src={Logo1} alt="Logo1" />
              <h1 className="head">SmartCart</h1>
            </div>
            <ul id="menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#singout">SignIn/SignOut</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="menuIcon" onClick={this.handleMenuToggle}>
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>

        <div className={`overlay-menu ${menuToggle ? "open" : ""}`}>
          <ul id="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
