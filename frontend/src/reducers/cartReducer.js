import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  SAVE_DELIVERY_INFO,
  UPDATE_DELIVERY_INFO,
  SET_RESTAURANT_ID,
} from "../constants/cartConstants";

const initialState = {
  cartItems: [],
  deliveryInfo: {},
  restaurantId: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const isItemExist = state.cartItems.find(
        (i) => i.fooditem === item.fooditem
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.fooditem === isItemExist.fooditem ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.fooditem !== action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    case SAVE_DELIVERY_INFO:
      return {
        ...state,
        deliveryInfo: action.payload,
      };

    case SET_RESTAURANT_ID:
      return {
        ...state,
        restaurantId: action.payload,
      };

    default:
      return state;
  }
};