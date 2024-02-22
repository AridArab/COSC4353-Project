

function QuoteFormContainer(){


    return(
        <div class="quote-form-container">
        <form id="fuelQuoteForm">
        <h1> Fuel Quote Form</h1>
        <h2>Please fill form below</h2>
        <div class="quote-form-bubble">
            <label for="gallonsRequested">Gallons Requested</label>
            <input type="number" id="gallonsRequested" name="gallonsRequested" required></input>
        </div>
        <div class="quote-form-bubble">
            <label for="deliveryAddress">Delivery Address</label>
            <input type="text" id="deliveryAddress" name="deliveryAddress" readonly></input>
        </div>
        <div class="quote-form-bubble">
            <label for="deliveryDate">Delivery Date</label>
            <input type="date" id="deliveryDate" name="deliveryDate" required></input>
        </div>
        <div class="quote-form-bubble">
            <label for="suggestedPrice">Suggested Price / Gallon:</label>
            <input type="number" id="suggestedPrice" name="suggestedPrice" readonly></input>
        </div>
        <div class="quote-form-bubble">
            <label for="totalAmountDue">Total Amount Due</label>
            <input type="number" id="totalAmountDue" name="totalAmountDue" readonly></input>
        </div>
        <button type="button" id="editProfile">Edit Profile</button>
        <button type="button" id="confirmOrder">Confirm Order</button>
    </form>
    </div>
    );

}

export default QuoteFormContainer;