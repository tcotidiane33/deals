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
                    <MDBInput label='marque' id='formControlDefault' type='text' />

                    <div className="col-lg-12 mt-5">
                        <label htmlFor="selectOptions">Marques:</label>
                        <select id="selectOptions" className="form-select" onChange={(e) => console.log("Selected value:", e.target.value)}>
                            <option value="">Select an option</option>
                            <option value="value1">Value 1</option>
                            <option value="value2" selected>Value 2</option>
                            <option value="value3">Value 3</option>
                            <option value="value4">Value 4</option>
                            <option value="value5">Value 5</option>
                            <option value="value6">Value 6</option>
                        </select>
                    </div>

                    <br />
                    <MDBFile label='Default file input example' id='customFile' />
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
