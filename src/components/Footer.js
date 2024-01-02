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

export default class Footer extends Component {
    render() {
        return (


            <Container className="navbar nav-bar-expand-sm navbar-dark px-sm-5">

                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link to='/'>
                        <img src={logo} alt="store" style={{
                            width: '50px',
                            height: ' 50px'
                        }} className="navbar-brand logo-img" />
                    </Link>
                    <Nav.Link href="/">MarketPlace</Nav.Link>
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
                    
                    <Nav.Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <i className="fas fa-cart-plus">Mes Deals🛒</i>
                        </ButtonContainer>
                    </Nav.Link>
                    <Nav.Link href="/formpostart" disabled>
                        <Button style={{ background: 'yellow', color: 'black' }}>
                            Publier une annonce
                        </Button>
                    </Nav.Link>
                </Nav>

            </Container>

        )
    }
}
