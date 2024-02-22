

function QuoteFormContainer(){


    return(
        <div className="quote-form-container">
        <form id="fuelQuoteForm">
        <h1> Fuel Quote Form</h1>
        <h2>Please fill form below</h2>
        <div className="quote-form-bubble">
            <label htmlFor="gallonsRequested">Gallons Requested</label>
            <input type="number" id="gallonsRequested" name="gallonsRequested" required></input>
        </div>
        <div className="quote-form-bubble">
            <label htmlFor="deliveryAddress">Delivery Address</label>
            <input type="text" id="deliveryAddress" name="deliveryAddress" readOnly></input>
        </div>
        <div className="quote-form-bubble">
            <label htmlFor="deliveryDate">Delivery Date</label>
            <input type="date" id="deliveryDate" name="deliveryDate" required></input>
        </div>
        <div className="quote-form-bubble">
            <label htmlFor="suggestedPrice">Suggested Price / Gallon:</label>
            <input type="number" id="suggestedPrice" name="suggestedPrice" readOnly></input>
        </div>
        <div className="quote-form-bubble">
            <label htmlFor="totalAmountDue">Total Amount Due</label>
            <input type="number" id="totalAmountDue" name="totalAmountDue" readOnly></input>
        </div>
        <button type="button" id="editProfile">Edit Profile</button>
        <button type="button" id="confirmOrder">Confirm Order</button>
    </form>
    </div>
    );

}

export default QuoteFormContainer;