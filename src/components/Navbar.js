import React from "react";
import { Link } from "gatsby";
import Logo from "../img/inline/logo.svg";
import {fromEvent} from "rxjs";
import {map, distinctUntilChanged} from "rxjs/operators";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      navBarTopClass: "on-top",
    };
  }

  componentDidMount() {
    fromEvent(document, 'scroll').pipe(
        map(() => document.body.getBoundingClientRect().y === 0),
        distinctUntilChanged(),
        map(isOnTop => isOnTop ? "on-top" : "scrolled"),
    ).subscribe(navBarTopClass => this.setState({ navBarTopClass }))
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className={`navbar is-transparent ${this.state.navBarTopClass} ${this.state.navBarActiveClass}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <Logo className={'leaf-left'}></Logo>
              <Logo className={'leaf-right'}></Logo>
              <h2 className={'brand-title'}>Ассоциация выпускников Дубравушки</h2>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-right">
              <Link className="navbar-item" to="/about">
                О нас
              </Link>
              <Link className="navbar-item" to="/offer">
                Услуги
              </Link>
              <Link className="navbar-item" to="/news">
                Новости
              </Link>
              <Link className="navbar-item" to="/contact">
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
