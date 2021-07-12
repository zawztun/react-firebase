import React from 'react';
import ContactForm from  './ContactForm'
import {db} from '../firebase'

function Contact() {
    const addOrEdit = obj => {
       db.collection('contacts').add(
            obj,
            err=> {
        if(err)
         console.log(err.message)
            }
        );
    }
    return (
        <div>
            <ContactForm addOrEdit = {addOrEdit}/>
        </div>
    )
}

export default Contact
