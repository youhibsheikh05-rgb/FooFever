import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  
  // Safe access to Redux state
  const storeState = useSelector((state) => state);
  const cartItems = storeState.cart?.cartItems || storeState.cartItems || [];

  const increaseQty = (item) => {
    const newQty = item.quantity + 1;
    if (item.stock <= item.quantity) return;
    dispatch(addItemToCart(item, newQty)); 
  };

  const decreaseQty = (item) => {
    const newQty = item.quantity - 1;
    if (item.quantity <= 1) return;
    dispatch(addItemToCart(item, newQty)); 
  };

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div className="container cart-container mt-5">
      <h2 className="my-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <h4 className="text-center mt-5">Your Cart is Empty</h4>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div className="cart-item d-flex align-items-center mb-3 p-3 border rounded" key={item.fooditem}>
                <img src={item.image} alt={item.name} className="cart-item-img" style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "10px" }} />
                
                <div className="ms-3 flex-grow-1">
                  <h5 className="mb-1">{item.name}</h5>
                  {/* Yahan Rs. kar diya hai */}
                  <p className="mb-0 text-muted">Rs. {item.price}</p>
                </div>
                
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm btn-light border" onClick={() => decreaseQty(item)}>-</button>
                  <span className="mx-3 fw-bold">{item.quantity}</span>
                  <button className="btn btn-sm btn-light border" onClick={() => increaseQty(item)}>+</button>
                </div>

                <button className="btn text-danger ms-3" onClick={() => removeCartItemHandler(item.fooditem)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="col-md-4">
            <div className="cart-summary p-4 border rounded bg-white shadow-sm">
              <h4 className="mb-4">Order Summary</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                {/* Yahan Rs. kar diya hai */}
                <span>Rs. {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Fee</span>
                <span>Rs. 50</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong>Rs. {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0) + 50}</strong>
              </div>
              <Link to="/delivery" className="btn btn-primary w-100">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;