// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
import FormPostArt from './components/Pages/FormPostArt';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import MyDeals from './components/Pages/MyDeals';
import { ProductProvider } from './context';
import {MDBAccordion, MDBAccordionItem, MDBBadge, MDBBreadcrumb, MDBBreadcrumbItem, MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardFooter, MDBCardGroup, MDBCardHeader, MDBCardImage, MDBCardLink, MDBCardOverlay, MDBCardSubTitle, MDBCardText, MDBCardTitle, MDBCarousel, MDBCarouselCaption, MDBCarouselItem, MDBCheckbox, MDBCol, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBFile, MDBFooter, MDBIcon, MDBInput, MDBInputGroup, MDBListGroup, MDBListGroupItem, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler, MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBProgress, MDBProgressBar, MDBRadio, MDBRange, MDBRipple, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBScrollspySubList, MDBSpinner, MDBSwitch, MDBTable, MDBTableBody, MDBTableHead, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane, MDBTextArea, MDBTooltip, MDBTypography, MDBValidation, MDBValidationItem} from 'mdb-react-ui-kit';



function App() {
  return (
    <ProductProvider >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/default" element={<Default />} />
          <Route path="/formPostArt" element={<FormPostArt />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/mydeals" element={<MyDeals />} />
        </Routes>
        <Modal />
        {/* <Footer/> */}
      </Router>
    </ProductProvider>
  );
}

export default App;