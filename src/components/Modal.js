import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          // Vérification pour s'assurer que value est défini
          if (!value) {
            console.error("Erreur: Le contexte (value) est indéfini dans le composant Modal.");
            return null;
          }

          const { modalOpen, closeModal, modalProduct } = value;

          // Vérification pour s'assurer que modalOpen et modalProduct sont définis
          if (!modalOpen || !modalProduct) {
            console.error("Erreur: Les propriétés modalOpen ou modalProduct sont indéfinies dans le composant Modal.");
            return null;
          }

          const { img, title, price } = modalProduct;

          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5"
                  >
                    <h5>Article ajouté au panier</h5>
                    <img src={img} className="img-fluid" alt="produit" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">Prix : {price} XOF</h5>
                    <Link to="/">
                      <ButtonContainer onClick={() => closeModal()}>
                        Continuer les achats
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer cart onClick={() => closeModal()}>
                        Aller au panier
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
