import React from 'react';
import { MDBFile, MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export default function FormPostArt() {
    const COLORS = ['white', 'red', 'blue', 'black', 'cream'];
    return (
        <Container>
            <form>
                <div>
                    <MDBInput label='Titre' id='formControlLg' type='text' size='lg' />
                    <br />
                    <MDBTextArea label='Description' id='textAreaExample' rows={4} />
                    <br />
                    <MDBInput label='Type' id='formControlDefault' type='text' />
                    <div className="col-lg-12 mt-5">
                        <label htmlFor="selectOptions">Type :</label>
                        <select id="selectOptions" className="form-select" onChange={(e) => console.log("Selected value:", e.target.value)}>
                            <option value="Type">Option de type</option>
                            <option value="value1">Téléphones Mobiles</option>
                            <option value="value2" >Ordinateurs</option>
                            <option value="value3">Appareils Électroménagers</option>
                            <option value="value4">Appareils Hi-Fi et Audio</option>
                            <option value="value5">Télévisions</option>
                            <option value="value6">Divers</option>
                        </select>
                    </div>
                    <br />
                    <div className="col-lg-12 mt-5">
                        <label htmlFor="selectOptions">Marques:</label>
                        <select id="selectOptions" className="form-select" onChange={(e) => console.log("Selected value:", e.target.value)}>
                            <option value="Marque">Option de Marque</option>
                            <option value="value1">Samsung</option>
                            <option value="value2" >Apple (iPhone)</option>
                            <option value="value3">Huawei</option>
                            <option value="value4">Tecno Mobile</option>
                            <option value="value5">Infinix</option>
                            <option value="value6">Nokia</option>
                            <option value="value6">HP (Hewlett-Packard)</option>
                            <option value="value6">Dell</option>
                            <option value="value6">Lenovo</option>
                            <option value="value6">ASUS</option>
                            <option value="value6">Acer</option>
                            <option value="value6">LG</option>
                            <option value="value6">Sony</option>
                            <option value="value6">Panasonic</option>
                            <option value="value6">Hisense</option>
                            <option value="value6">TCL</option>
                            <option value="value6">Bosch</option>
                            <option value="value6">hirlpool</option>
                            <option value="value6">Miele</option>
                            <option value="value6">Bose</option>
                            <option value="value6">Panasonic</option>
                            <option value="value6">JBL</option>                            <option value="value6"></option>
                            <option value="value6">Sennheiser</option>
                            <option value="value6"></option>

                        </select>
                    </div>

                    <br />
                    <MDBFile label='pièces Jointes' id='customFile' />
                    <br />
                    <label>Ville:</label>
                    <br />
                    <select>
                        <option value="">Selectionner une Ville</option>
                        {COLORS.map(c => <option key={c}>{c}</option>)}
                    </select>
                </div>

                <br />
                <MDBInput label='Email' id='formControlSm' type='text' size='sm' />
                <br />
                <MDBInput label='Numéro de Téléphone' id='formControlSm' type='text' size='sm' />
                <br />

                <Button style={{ background: 'yellow', color: 'black' }} color='info'>
                    Publier une annonce
                </Button>


            </form>
            <br />
        </Container>
    );
}
