// Create a Stripe client.
var stripe = Stripe('pk_test_g6do5S237ekq10r65BnxO6S0')

// Create an instance of Elements.
var elements = stripe.elements()

// Custom classes for various state changes
const classes = {
  base: 'card-element',
  complete: '--complete',
  focus: '--focus',
  empty: '--empty',
  invalid: '--invalid',
  webkitAutofill: '--webkit-autofill'
}

// Custom styling can be passed to options when creating an Element.
const style = {
  base: {
    color: '#222',
    fontSize: '16px',
    fontFamily: 'inherit'
  }
}

// Create an instance of the card Element
const card = elements.create('card', { classes, style: style })

// Add an instance of the card Element into the `card-element` <div>
card.mount('#card-element')

card.addEventListener('change', event => {
  var formElement = document.getElementById('payment-form')
  var displayError = document.getElementById('card-errors')
  if (event.error) {
    formElement.classList.add('--invalid')
    displayError.textContent = event.error.message
  } else {
    formElement.classList.remove('--invalid')
    displayError.textContent = ''
  }
})

// Create a token or display an error when the form is submitted.
const form = document.getElementById('payment-form')
form.addEventListener('submit', event => {
  event.preventDefault()

  stripe.createToken(card).then(result => {
    if (result.error) {
      // Inform the user if there was an error.
      var errorElement = document.getElementById('card-errors')
      errorElement.textContent = result.error.message
    } else {
      // Send the token to your server.
      stripeTokenHandler(result.token)
    }
  })
})

const stripeTokenHandler = (token) => {
  // Insert the token ID into the form so it gets submitted to the server
  const form = document.getElementById('payment-form')
  const hiddenInput = document.createElement('input')
  hiddenInput.setAttribute('type', 'hidden')
  hiddenInput.setAttribute('name', 'stripeToken')
  hiddenInput.setAttribute('value', token.id)
  form.appendChild(hiddenInput)
  form.submit()
}
