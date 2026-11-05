import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../actions/cartActions";

const Fooditem = ({ fooditem }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(fooditem, 1));
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 my-3">
      <div className="card food-card h-100">
        <img
          className="card-img-top"
          src={fooditem.images && fooditem.images[0] ? fooditem.images[0].url : "https://via.placeholder.com/200"}
          alt={fooditem.name}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{fooditem.name}</h5>
          <p className="card-text text-muted text-truncate">{fooditem.description}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="food-price">Rs. {fooditem.price}</span>
            <button
              className="btn btn-primary add-cart-btn"
              onClick={addToCart}
              disabled={fooditem.stock === 0}
            >
              {fooditem.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fooditem;