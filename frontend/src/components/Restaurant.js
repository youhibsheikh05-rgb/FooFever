import React from "react";
import { Link } from "react-router-dom";

const Restaurant = ({ restaurant }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card restaurant-card">
        <Link to={`/eats/stores/${restaurant._id}/menus`}>
          <img
            className="card-img-top"
            src={restaurant.images[0]?.url}
            alt={restaurant.name}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{restaurant.name}</h5>
          <p className="card-text text-muted">{restaurant.address}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="ratings">
              <span className="star">★</span>
              <span className="rating-text">{restaurant.ratings}</span>
              <span className="review-text">({restaurant.numOfReviews} Reviews)</span>
            </div>
            <span className={`status-badge ${restaurant.isVeg ? 'veg' : 'non-veg'}`}>
              {restaurant.isVeg ? 'Veg' : 'Non-Veg'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;