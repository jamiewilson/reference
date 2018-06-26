// https://stripe.com/docs/checkout#integration-custom
var handler = StripeCheckout.configure({
  key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function (token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
  }
})

document.getElementById('purchase-button').addEventListener('click', function (e) {
  // Open Checkout with further options:
  handler.open({
    name: 'Stripe.com',
    description: '2 widgets',
    zipCode: true,
    amount: 2000
  })
  e.preventDefault()
})

// Close Checkout on page navigation:
window.addEventListener('popstate', function () {
  handler.close()
})
