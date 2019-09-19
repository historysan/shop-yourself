/* eslint no-unused-vars: 0 */

import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_XJ1DiTuVv3XNDj8APZd8rkyJ00nbbnUkTs'
  return (
    <StripeCheckout
      label="Pay Now"
      name="SHOP YOURSELF Ltd."
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
