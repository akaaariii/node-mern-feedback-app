import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'

import * as actions from '../actions'

const Payment = ({ handleToken }) => {
  return (
    <StripeCheckout
      name="Emeruly"
      description="$5 for 5 email credits"
      amount={500}
      token={(token) => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
    >
      <button className="btn">Add Credits</button>
    </StripeCheckout>
  )
}

export default connect(null, actions)(Payment)