import React,{ useState} from 'react';

function ContactForm(props) { 

    const initValues = {
        name:'',
        email :'',
        address: ''
    };

    const [values, setValues] = useState(initValues);
    const handleInputChange = e => {
        var {name, value} = e.target
        setValues({...values, [name]:value} )   
    };

    const onSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
        console.log(values)
        setValues({name:'',
        email :'',
        address: ''})   
       
    };

    return (
    <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
            <div className="column">
                <form className="ui form" onSubmit = {onSubmit}>
                    <h4 className="ui dividing header">User Information</h4>
                        <div className="field">
                            <label>Name</label>            
                            <div className="field">
                                <input type="text" 
                                name="name" 
                                placeholder="User Name"
                                value = {values.name}
                                onChange = {handleInputChange}
                                />
                            </div>

                            <label>Email</label>
                            <div className="field">
                                <input type="text" 
                                name="email" 
                                placeholder="Email "
                                value = {values.email}
                                onChange = {handleInputChange}/>
                            </div>  
                        </div>
                        <div className="field">
                            <label>Billing Address</label>
                            <div className="fields">
                                <input type="text" 
                                name="address" 
                                placeholder="Street Address"
                                value = {values.address}
                                onChange = {handleInputChange}
                                />
                            </div>
                        </div>
                    <button className = "ui  right floated button green">OnSubmit</button>
                </form>
            </div>
                <div class="column">
                    <div className="ui header">
                             Contact Lists
                            {values.name}
                    </div>
                </div>
        </div>
    </div>
    );
}

export default ContactForm
