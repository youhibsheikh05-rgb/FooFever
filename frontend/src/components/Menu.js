import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setRestaurantId } from "../actions/cartActions";
import Fooditem from "../components/Fooditem";

const Menu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Redux se cart check kar rahe hain
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (id) {
      dispatch(setRestaurantId(id));
    }
  }, [dispatch, id]);

  // ==========================================
  // DUMMY DATA (Kyunki database se nahi aa raha)
  // ==========================================
  const dummyMenuData = [
    {
      _id: "menu1",
      category: "Fast Food",
      items: [
        {
          _id: "65f1a2b3c4d5e6f7a8b9c0d1",
          name: "Chicken Burger",
          price: 150,
          description: "Delicious grilled chicken burger with extra cheese.",
          ratings: 4.5,
          images: [{ url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" }],
          stock: 50,
          numOfReviews: 10,
        },
        {
          _id: "65f1a2b3c4d5e6f7a8b9c0d2",
          name: "Veggie Pizza",
          price: 250,
          description: "Loaded with fresh vegetables and mozzarella cheese.",
          ratings: 4.2,
          images: [{ url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" }],
          stock: 30,
          numOfReviews: 5,
        },
      ],
    },
    {
      _id: "menu2",
      category: "Beverages",
      items: [
        {
          _id: "65f1a2b3c4d5e6f7a8b9c0d3",
          name: "Cold Coffee",
          price: 120,
          description: "Chilled coffee with ice cream.",
          ratings: 4.8,
          images: [{ url: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500" }],
          stock: 20,
          numOfReviews: 15,
        },
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Menu</h1>

      {dummyMenuData.map((menu) => (
        <div key={menu._id} className="mb-5">
          <h2 className="category-title">{menu.category}</h2>
          <hr />
          <div className="row">
            {menu.items.map((fooditem) => (
              <Fooditem key={fooditem._id} fooditem={fooditem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;