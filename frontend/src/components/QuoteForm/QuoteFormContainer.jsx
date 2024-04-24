import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteFormContainer() {
    const [gallonsRequested, setGallonsRequested] = useState('');
    const [deliveryAddress] = useState('123 Houston, TX, 12345'); 
    const [suggestedPrice] = useState(2.50); 
    const [totalAmountDue, setTotalAmountDue] = useState('');

    useEffect(() => {
    }, []);

    const calculateTotalAmountDue = () => {
        const total = gallonsRequested * suggestedPrice;
        const formattedTotal = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(total);
        setTotalAmountDue(formattedTotal);
    };

    useEffect(() => {
        calculateTotalAmountDue();
    }, [gallonsRequested, suggestedPrice]);
    const handleConfirmOrder = async () => {
        const formData = {
            gallonsRequested,
            deliveryAddress,
            suggestedPrice,
            totalAmountDue,
           
        };
        try {
            const response = await axios.post('http://localhost:8000/api/user/me/quote/create', formData);
            console.log('Order confirmed:', response.data);
            // Handle further actions, e.g., showing a success message, redirecting, etc.
        } catch (error) {
            console.error('Failed to confirm order:', error);
            // Handle error, e.g., showing an error message
        }
    };

    return (
        <div className="quote-form-container">
            <form id="fuelQuoteForm">
                <h1>Fuel Quote Form</h1>
                <h2>Please fill form below</h2>
                <div className="quote-form-bubble">
                    <label htmlFor="gallonsRequested">Gallons Requested</label>
                    <input
                        type="number"
                        id="gallonsRequested"
                        className="form-input"
                        name="gallonsRequested"
                        value={gallonsRequested}
                        onChange={e => setGallonsRequested(parseFloat(e.target.value) || '')}
                        required />
                </div>
                <div className="quote-form-bubble">
                    <label htmlFor="deliveryAddress">Delivery Address</label>
                    <input
                        type="text"
                        id="deliveryAddress"
                        className="form-input"
                        name="deliveryAddress"
                        value={deliveryAddress}
                        readOnly />
                </div>
                <div className="quote-form-bubble">
                    <label htmlFor="deliveryDate">Delivery Date</label>
                    <input
                        type="date"
                        id="deliveryDate"
                        className="form-input"
                        name="deliveryDate"
                        required />
                </div>
                <div className="quote-form-bubble">
                    <label htmlFor="suggestedPrice">Suggested Price / Gallon:</label>
                    <input
                        type="number"
                        id="suggestedPrice"
                        className="form-input"
                        name="suggestedPrice"
                        value={suggestedPrice}
                        readOnly />
                </div>
                <div className="quote-form-bubble">
                    <label htmlFor="totalAmountDue">Total Amount Due $</label>
                    <input
                        type="text"
                        id="totalAmountDue"
                        className="form-input"
                        name="totalAmountDue"
                        value={totalAmountDue}
                        readOnly />
                </div>
                <button type="button" id="editProfile">Edit Profile</button>
                <button type="button" id="confirmOrder">Confirm Order</button>
            </form>
        </div>
    );
}

export default QuoteFormContainer;