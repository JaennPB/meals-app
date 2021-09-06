import { configureStore } from "@reduxjs/toolkit";

import favoritesSlice from "./favoritesSlice";
import mealsSlice from "./mealsSlice";

const store = configureStore({
  reducer: {
    meals: mealsSlice,
    favorites: favoritesSlice,
  },
});

export default store;
