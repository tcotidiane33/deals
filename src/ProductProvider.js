import React, { Component, createContext } from 'react';
import { ProductConsumer } from './context';

const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    products: [], // Assurez-vous que cette propriété est définie dans votre état
    cart: [], // Exemple de propriété pour le panier
    modalOpen: false, // Exemple de propriété pour un modal
    // ... autres propriétés
  };

  // Méthode pour ajouter un produit au panier
  addToCart = (productId) => {
    // Logique pour ajouter un produit au panier
    console.log(`Product added to cart with ID: ${productId}`);
  };

  // Méthode pour ouvrir le modal
  openModal = (productId) => {
    // Logique pour ouvrir le modal
    console.log(`Modal opened for product with ID: ${productId}`);
  };

  // ... Autres méthodes
  render() {
    return (
      <ProductContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
