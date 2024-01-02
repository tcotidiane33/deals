import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import './loginSignup.css';
import logo from '../../big-deal-logo.png';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <MDBContainer className="my-5 gradient-form">

            <MDBRow>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">

                        <div className="text-center">
                            <img src={logo}
                                style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">AKWABA, Ici c'est CI on fais les vrai Deals</h4>
                        </div>

                        <p>Connecter votre compte ici !</p>


                        <MDBInput wrapperClass='mb-4' label='Adresse Email ' id='form1' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Mot de passe' id='form2' type='password' />


                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="text-black mb-4 w-100 gradient-custom-2" color='warning'>Se connecter</MDBBtn>
                            <a className="text-muted" href="#!">Mot de passe oublié?</a>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">Vous n'avez pas de compte?</p>
                            <Link to='/signUp'>
                                <MDBBtn outline className='mx-2' color='warning'>
                                    S'incrire
                                </MDBBtn>
                            </Link>
                        </div>
                        <div className='text-center'>
                          
                            <p>or sign up with:</p>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='google' />
                            </MDBBtn>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='twitter' />
                            </MDBBtn>

                            <MDBBtn floating color="secondary" className='mx-1'>
                                <MDBIcon fab icon='github' />
                            </MDBBtn>
                        </div>

                    </div>

                </MDBCol>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                            <h4 class="mb-4">We are more than just a company</h4>
                            <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                    </div>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Login;