import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setRestaurantId } from "../actions/cartActions";
import Fooditem from "../components/Fooditem";

const Menu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Redux se cart check kar rahe hain
  const { cartItems } = useSelector((state) => state.cart || {});

  useEffect(() => {
    if (id) {
      dispatch(setRestaurantId(id));
    }
  }, [dispatch, id]);

  // ==========================================
  // DUMMY DATA (Burger King vs Pizza Hut)
  // ==========================================
  
  // Burger King ka menu
  const burgerKingMenu = [
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
          name: "Veggie Burger",
          price: 120,
          description: "Healthy and tasty veggie burger.",
          ratings: 4.2,
          images: [{ url: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500" }],
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

  // Pizza Hut ka menu
  const pizzaHutMenu = [
    {
      _id: "menu3",
      category: "Pizzas",
      items: [
        {
          _id: "65f1a2b3c4d5e6f7a8b9c0d4",
          name: "Fajita Pizza",
          price: 850,
          description: "Loaded with chicken fajita, onions, and capsicum.",
          ratings: 4.7,
          images: [{ url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500" }],
          stock: 40,
          numOfReviews: 120,
        },
        {
          _id: "65f1a2b3c4d5e6f7a8b9c0d5",
          name: "Pepperoni Pizza",
          price: 950,
          description: "Classic pepperoni with extra mozzarella cheese.",
          ratings: 4.9,
          images: [{ url: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500" }],
          stock: 25,
          numOfReviews: 200,
        },
      ],
    },
    {
      _id: "menu4",
      category: "Sides",
      items: [
        {
          _id: "65f1a2b3c4d5e6f7a8b9c0d6",
          name: "Garlic Bread",
          price: 250,
          description: "Freshly baked garlic bread with cheese.",
          ratings: 4.4,
          images: [{ url: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500" }],
          stock: 100,
          numOfReviews: 80,
        },
      ],
    },
  ];

  // ID ke hisaab se menu select karo
  // Agar URL mein Pizza Hut ki ID hai toh pizza menu, warna burger menu
  // (URL check karne ke liye hum 'id' use kar rahe hain)
  // Maan lo Burger King ki ID '6ae9cc754b4d5da5190e9bd4' hai
  const currentMenu = id === "6ae9cc754b4d5da5190e9bd4" ? burgerKingMenu : pizzaHutMenu;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Menu</h1>

      {currentMenu.map((menu) => (
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