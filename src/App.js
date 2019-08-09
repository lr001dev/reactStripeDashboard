import React from 'react';
import { BASE_URL } from './constants.js'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './components/CheckoutForm'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    sessions: []

  }
  componentDidMount() {
    fetch(`${ BASE_URL }/sessions`)
    .then(response => response.json())
    .then((sessionData) => {
      this.setState({ sessions: [sessionData]})
    })
    .catch(err=> console.log(err))
  }
  render() {
    return (
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

export default App
