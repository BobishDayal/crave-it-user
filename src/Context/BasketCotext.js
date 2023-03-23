import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";

import { Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";

const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();
  const [basket, setBasket] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [basketDishes, setBasketDishes] = useState([]);

  const totalPrice = basketDishes.reduce(
    (sum, basketDish) => sum + basketDish.quantity * basketDish.Dish.price,
    restaurant?.deliveryFee
  );

  useEffect(() => {
    DataStore.query(Basket, (b) =>
      b.restaurantID("eq", restaurant.id).userID("eq", dbUser.id)
    ).then((baskets) => setBasket(baskets[0]));
  }, [dbUser, restaurant]);

  useEffect(() => {
    DataStore.query(BasketDish, (bd) => bd.basketID("eq", basket.id)).then(
      setBasketDishes
    );
  }, [basket]);

  const createNewBasket = async () => {
    const newBasket = await DataStore.save(
      new Basket({ userID: dbUser.id, restaurantID: restaurant.id })
    );
    setBasket(newBasket);
    return newBasket;
  };

  const addDishToBasket = async (dish, quantity) => {
    //get the existing basket or create a new one
    let theBasket = basket || (await createNewBasket());
    // if (!basket) {
    //   theBasket = await createNewBasket();
    // } else {
    //   theBasket = basket;
    // }

    //create a basketDish item and save to database
    const newDish = await DataStore.save(
      new Basket({ quantity, Dish: dish, basketID: theBasket.id })
    );

    setBasketDishes(...basketDishes, newDish);
  };

  return (
    <BasketContext.Provider
      value={{
        addDishToBasket,
        setRestaurant,
        restaurant,
        basket,
        basketDishes,
        totalPrice,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext);
