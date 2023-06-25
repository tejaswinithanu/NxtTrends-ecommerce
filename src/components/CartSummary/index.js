// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItemsCount = cartList.length
      let totalPrice = 0
      const sumPrice = product => {
        totalPrice += product.quantity * product.price
      }
      cartList.forEach(sumPrice)
      return (
        <div className="summary-container">
          <h1 className="summary-heading">
            Order Total: <span className="total-price">Rs {totalPrice}/-</span>
          </h1>
          <p className="summary-count">{cartItemsCount} items in cart</p>
          <button className="checkout-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
