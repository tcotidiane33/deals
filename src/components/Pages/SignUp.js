import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import './loginSignup.css';
import logo from '../../big-deal-logo.png';
import { Link } from 'react-router-dom';

function SignUp() {
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
                        
                        <MDBRow className='mb-4'>
                            <MDBCol>
                                <MDBInput id='form3Example1' label='First name' />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput id='form3Example2' label='Last name' />
                            </MDBCol>
                        </MDBRow>
                        <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />
                        <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' />

                        <MDBCheckbox
                            wrapperClass='d-flex justify-content-center mb-4'
                            id='form3Example5'
                            label='Subscribe to our newsletter'
                            defaultChecked
                        />

                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="text-black mb-4 w-100 gradient-custom-2" color='warning'>S'incrire</MDBBtn>
                            <a className="text-muted" href="#!">Mot de passe oublié?</a>
                        </div>
                        

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">Vous avez deja un compte?</p>
                            <Link to='/login'>
                                <MDBBtn outline className='mx-2' color='warning'>
                                    Se connecter
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
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                    </div>

                </MDBCol>

            </MDBRow>

        </MDBContainer >
    );
}

export default SignUp;