import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

class SignUp extends React.Component {
  render() {
    return(
      <div className="App">

        <StripeProvider apiKey="pk_test_jo2pVFVVmc2UOxwH78bij2Fd">
          <div className="example">
            <h1>React Stripe Elements Example</h1>
            <Elements>
              <CheckoutForm />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    )
  }
}
export default SignUp
