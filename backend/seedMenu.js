const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Menu = require("./models/menu"); 

dotenv.config({ path: "./config/config.env" });

mongoose
  .connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("DB Connected. Adding menu...");
    
    const restaurantId = "6ae9cc754b4d5da5190e9bd4"; 

    const menuData = {
      restaurant: restaurantId,
      category: "Fast Food",
      items: [
        {
          name: "Chicken Burger",
          price: 150,
          description: "Delicious chicken burger",
          ratings: 4.5,
          images: [{ public_id: "dummy1", url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" }],
          stock: 50,
          numOfReviews: 10,
        },
        {
          name: "Veggie Pizza",
          price: 250,
          description: "Loaded with fresh vegetables",
          ratings: 4.2,
          images: [{ public_id: "dummy2", url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" }],
          stock: 30,
          numOfReviews: 5,
        }
      ]
    };

    try {
      await Menu.create(menuData);
      console.log("✅ Menu Added Successfully!");
      process.exit();
    } catch (error) {
      console.log("❌ Error:", error.message);
      process.exit(1);
    }
  });