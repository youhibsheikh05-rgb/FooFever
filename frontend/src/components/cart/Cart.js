import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../actions/cartActions";
import "../../App.css"; // Ensure CSS is loaded

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) return;
    dispatch(addItemToCart(id, newQty));
  };

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;
    if (quantity <= 1) return;
    dispatch(addItemToCart(id, newQty));
  };

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className="container cart-container">
      <h2 className="my-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <h4 className="text-center mt-5">Your Cart is Empty</h4>
      ) : (
        <>
          <div className="row">
            <div className="col-md-8">
              {cartItems.map((item) => (
                <div className="cart-item d-flex align-items-center mb-3 p-3" key={item.foodItem}>
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details ms-3 flex-grow-1">
                    <Link to={`/eats/stores/${item.restaurant}/menus`} className="cart-item-name">
                      {item.name}
                    </Link>
                    <p className="cart-item-price mb-0">₹{item.price}</p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="cart-item-qty d-flex align-items-center">
                    <button className="btn qty-btn" onClick={() => decreaseQty(item.foodItem, item.quantity)}>-</button>
                    <span className="mx-2 qty-text">{item.quantity}</span>
                    <button className="btn qty-btn" onClick={() => increaseQty(item.foodItem, item.quantity, item.stock)}>+</button>
                  </div>

                  {/* Remove Button */}
                  <button className="btn remove-btn ms-3" onClick={() => removeCartItemHandler(item.foodItem)}>
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="col-md-4">
              <div className="cart-summary p-4">
                <h4 className="mb-4">Order Summary</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>₹{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery Fee</span>
                  <span>₹50</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total</strong>
                  <strong>₹{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0) + 50}</strong>
                </div>
                <Link to="/delivery" className="btn btn-primary w-100 checkout-btn">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;