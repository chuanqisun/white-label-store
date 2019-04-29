import React, { useState } from 'react';
import styled from 'styled-components';

import { font, color, space } from '../../styles';

const defaultCheckoutData = {
  first: '',
  last: '',
  addr1: '',
  addr2: '',
  city: '',
  shipping: 'ground',
};

export function CheckoutForm() {
  const [checkoutData, setCheckoutData] = useState(defaultCheckoutData);

  function handleCheckoutDataChange(name, value) {
    const newCheckoutData = { ...checkoutData };
    newCheckoutData[name] = value;
    setCheckoutData(newCheckoutData);
  }

  function handlePlaceOrder(e) {
    e.preventDefault();
    window.location.href = './home.html';
  }

  return (
    <StyledForm onSubmit={handlePlaceOrder}>
      <fieldset>
        <legend>Shipping address</legend>
        <div className="form-field">
          <label htmlFor="first">First name</label>
          <input id="first" type="text" name="first" value={checkoutData.first} onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="last">Last name</label>
          <input id="last" type="text" name="last" value={checkoutData.last} onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="addr1">Address 1</label>
          <input id="addr1" type="text" name="addr1" value={checkoutData.addr1} onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="addr2">Address 2</label>
          <input id="addr2" type="text" name="addr2" value={checkoutData.addr2} onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="city">City</label>
          <input id="city" type="text" name="city" value={checkoutData.city} onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="country">Coutnry/Region</label>
          <input id="country" type="text" name="country" value={checkoutData.city} onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="state">State</label>
          <input id="state" type="text" name="state" value={checkoutData.state} onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="zip">Zip</label>
          <input id="zip" type="text" name="zip" value={checkoutData.zip} onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)} />
        </div>
      </fieldset>

      <fieldset>
        <legend>Shipping method</legend>
        <div className="radio-group">
          <input
            id="shipping-opt-1"
            name="shipping"
            type="radio"
            value="ground"
            checked={checkoutData.shipping === 'ground'}
            onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)}
          />
          <label htmlFor="shipping-opt-1">Ground - Free</label>
          <input
            id="shipping-opt-2"
            name="shipping"
            type="radio"
            value="2-day"
            checked={checkoutData.shipping === '2-day'}
            onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)}
          />
          <label htmlFor="shipping-opt-2">2 Day - $8.99</label>
          <input
            id="shipping-opt-3"
            name="shipping"
            type="radio"
            value="1-day"
            checked={checkoutData.shipping === '1-day'}
            onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)}
          />
          <label htmlFor="shipping-opt-3">1 Day - $19.99</label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Payment</legend>
        <div className="form-field">
          <label htmlFor="cc-number">Card number</label>
          <input
            id="cc-number"
            autoComplete="cc-number"
            type="text"
            name="credit-card-number"
            onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="cc-name">Name on card</label>
          <input autoComplete="cc-name" type="text" name="credit-card-name" onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="cc-exp">Expiration date</label>
          <input autoComplete="cc-exp" type="text" name="credit-card-exp" onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)} />
        </div>
        <div className="form-field">
          <label htmlFor="cc-csc">Security code</label>
          <input autoComplete="cc-csc" type="text" name="credit-card-csc" onChange={e => handleCheckoutDataChange(e.target.name, e.target.value)} />
        </div>
      </fieldset>
      <div className="checkout-actions">
        <button type="submit">Place order</button>
        <button>Cancel</button>
      </div>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  .form-field:not(:first-of-type) {
    margin-top: 1rem;
  }

  .form-field {
    label {
      display: inline-block;
      width: 8rem;
      text-align: right;
      margin-right: 1rem;
    }
  }

  .radio-group {
    display: grid;
    grid-template-columns: 2rem auto;
    grid-gap: 1rem 0;
  }

  .checkout-actions {
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: column;
    justify-content: flex-end;
  }
`;
