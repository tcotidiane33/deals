import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../big-deal-logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

// import Navbar from 'react-bootstrap/Navbar';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
                <Container>


                    {/* <ul className="navbar-nav align-items-center">
    <li className=" nav-item ml-5">
        <Link to="/" className="nav-link">
            MarketPlace de Baby 🟧⬜🟩
        </Link>
        <Link to='/'>
            <img src={logo} alt="store" className="navbar-brand logo-img" />
        </Link>
    </li>

</ul> */}

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <Link to='/'>
                                <img src={logo} alt="store" className="navbar-brand logo-img" />
                            </Link>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Rechercher"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success"><i class="fa fa-search" aria-hidden="true"></i></Button>
                            </Form>
                        </div>
                        {/* <Nav.Link href="/">MarketPlace</Nav.Link> */}
                        <NavDropdown title="Ville" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Abidjan</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Adjamé
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Cocody
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Ventes" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Flash</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Black Friday
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Colis
                            </NavDropdown.Item>
                        </NavDropdown>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '10vh' }}>
                            <Nav.Link href="/formpostart" >
                                <Button style={{ background: 'yellow', color: 'black' }} color='info'>
                                    Publier une annonce
                                </Button>
                            </Nav.Link>
                            <Nav.Link to="/cart" className="ml-auto">
                                <Button style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', background: 'black', color: 'withe' }} color='info'>
                                    Mes Deals <i class="fa fa-cart" aria-hidden="true"></i>
                                </Button>
                            </Nav.Link>
                        </div>


                    </Nav>
                </Container>
            </NavWrapper>

        )
    }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  display: flex;
  justify-content: space-between; /* Ajustez cela selon vos besoins */
  align-items: center;
  margin-bottom:1rem;
  padding: 1rem 1rem; /* Ajoutez un espace autour des éléments si nécessaire */

  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    margin: 0 1rem; /* Ajoutez une marge entre les liens si nécessaire */
  }

  .logo-img {
    width: 50px;
    height: 50px;
  }
`;


// <MobileNav className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
// {/* ... le contenu de votre barre de navigation mobile ... */}
// </MobileNav>
// const MobileNav = styled(Navbar)`
//   background: var(--mainBlue);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   .nav-link {
//     color: var(--mainWhite) !important;
//     font-size: 1.3rem;
//     text-transform: capitalize;
//   }
//   .logo-img {
//     width: 50px;
//     height: 50px;
//   }
// `;
