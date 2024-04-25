import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteFormContainer() {
    const [gallonsRequested, setGallonsRequested] = useState();
    const [deliveryAddress, setDeliveryAddress] = useState('Loading address...'); // Initially set to loading
    const [state, setState] = useState('Loading state...');
    const [deliveryDate, setDeliveryDate] = useState(null); // Set to null, will be updated in dateUpdate function
    const [suggestedPrice] = useState(2.50);
    const [totalAmountDue, setTotalAmountDue] = useState('');
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [confirmationData, setConfirmationData] = useState(null);

    useEffect(() => {
        // Fetch the user's profile data to get the delivery address
        fetchUserProfile();
        calculateTotalAmountDue();
    }, [gallonsRequested, suggestedPrice]);

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/user/me/profile');
            const data = response.data;
            if (data) {
                // Update deliveryAddress with city, state, and zipcode combined
                setDeliveryAddress(data.address1);
                setState(data.state);
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
            setDeliveryAddress('Failed to load address');
        }
    };

    function dateUpdate(e) {
        const dateValue = e.target.value;
        console.log("DATE:", dateValue);
        setDeliveryDate(dateValue);
    }

    const calculateTotalAmountDue = () => {
        const total = gallonsRequested * suggestedPrice;
        const formattedTotal = new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(total);
        setTotalAmountDue(formattedTotal);
    };

    const handleConfirmOrder = async () => {
        const formData = new FormData();
        formData.append("gallonsRequested", gallonsRequested);
        formData.append("deliveryAddress", deliveryAddress);
        formData.append("deliveryDate", deliveryDate);
        formData.append("state", state);
        console.log("type:", deliveryDate.type);
        try {
            console.log(formData.get("gallonsRequested"));
            console.log(formData.get("deliveryAddress"));
            console.log(formData.get("deliveryDate"));
            console.log(formData.get("state"));
            const response = await axios.post('http://localhost:8000/api/user/me/quote/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-date'
                }
            });
            setConfirmationData(response.data);
            setOrderConfirmed(true);
        } catch (error) {
            console.error('Failed to confirm order:', response.data);
            alert('Failed to confirm order: ' + error.message);
        }
    };

    if (orderConfirmed && confirmationData) {
        // Render the confirmation page
        return (
            <div>
                <h1>Order Confirmation</h1>
                <p>Gallons Requested: {confirmationData.gallonsRequested}</p>
                <p>Delivery Address: {confirmationData.deliveryAddress}</p>
                <p>Suggested Price / Gallon: ${confirmationData.suggestedPrice}</p>
                <p>Total Amount Due: ${confirmationData.totalAmountDue}</p>
            </div>
        );
    }

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
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        id="state"
                        className="form-input"
                        name="state"
                        value={state}
                        readOnly />
                </div>
                <div className="quote-form-bubble">
                    <label htmlFor="deliveryDate">Delivery Date</label>
                    <input
                        type="date"
                        id="deliveryDate"
                        className="form-input"
                        name="deliveryDate"
                        value={deliveryDate}
                        onChange={(e) => dateUpdate(e)}
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
                        type="number"
                        id="totalAmountDue"
                        className="form-input"
                        name="totalAmountDue"
                        value={totalAmountDue}
                        readOnly />
                </div>
                <button type="button" id="editProfile">Edit Profile</button>
                <button type="button" id="confirmOrder" onClick={handleConfirmOrder}>Confirm Order</button>
            </form>
        </div>
    );
}

export default QuoteFormContainer;
