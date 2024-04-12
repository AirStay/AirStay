import React, { useState } from 'react';
import { render } from 'react-dom';
import Card from 'react-credit-cards';
import { Link } from 'react-router-dom';


import { formatCreditCardNumber, formatCVC, formatExpirationDate } from './Utils';
import 'react-credit-cards/es/styles-compiled.css';

const Payment = ({onSubmit}) => {
    const [state, setState] = useState({ cnumber: '', chname: '', expiry: '', cvc: '', issuer: '', focused: '', formData: null });

    const handleCallback = ({ issuer }, isValid) => {
        if (isValid) setState({ ...state, issuer });
    };

    const handleInputFocus = ({ target }) => setState({ ...state, focused: target.name });

    const handleInputChange = ({ target }) => {
        let { name, value } = target;
        if (name === 'number') value = formatCreditCardNumber(value);
        else if (name === 'expiry') value = formatExpirationDate(value);
        else if (name === 'cvc') value = formatCVC(value);
        setState({ ...state, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // alert('You have finished payment!');
        // setState({ number: '', name: '', expiry: '', cvc: '', issuer: '', focused: '', formData: null });
        onSubmit(state);
    };

    const { chname, cnumber, expiry, cvc, focused, issuer } = state;

    return (
        <div key='Payment'>
            <div className='App-payment container border pb-3' style={{ width: '40vw' }}>
                <h3 className='m-4' style={{ justifyContent: 'center', margin: 'auto', display: 'flex' }}>Enter your Card details</h3>
                <Card className='m-4' number={cnumber} name={chname} expiry={expiry} cvc={cvc} focused={focused} callback={handleCallback} />
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <small>Name on card:</small>
                        <input type='text' name='chname' className='form-control' placeholder='Name' pattern='[a-zA-Z-]+' required value={chname} onChange={handleInputChange} onFocus={handleInputFocus} />
                    </div>
                    <div className='form-group'>
                        <small>Card Number:</small>
                        <input type='tel' name='cnumber' className='form-control' placeholder='Card Number' pattern='[\d| ]{16,22}' maxLength='19' required value={cnumber} onChange={handleInputChange} onFocus={handleInputFocus} />
                    </div>
                    <div className='form-group'>
                        <small>Expiration Date:</small>
                        <input type='tel' name='expiry' className='form-control' placeholder='Valid Thru' pattern='\d\d/\d\d' required value={expiry} onChange={handleInputChange} onFocus={handleInputFocus} />
                    </div>
                    <div className='form-group'>
                        <small>CVV:</small>
                        <input type='tel' name='cvc' className='form-control' placeholder='CVV' pattern='\d{3}' required value={cvc} onChange={handleInputChange} onFocus={handleInputFocus} />
                    </div>
                    <input type='hidden' name='issuer' value={issuer} />
                    <div className='form-actions'>
                        <button className='btn btn-success' style={{ justifyContent: 'center', margin: 'auto', display: 'flex' }}>Pay</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;
