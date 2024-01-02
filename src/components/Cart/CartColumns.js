import React from 'react';

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
               <div className="col-10 mx-auto col-lg-2">
                   <p className="text-uppercase">Deals</p>  
               </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">libellé</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">prix</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantité</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">supprimer</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
          </div>   
        </div>
    )
}
