import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllCategories: {},
  mealsByCategory: {},
  mealDetails: {},
};

export const fetchCategories = createAsyncThunk(
  "meals/getCartegories",
  async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const resData = await response.json();
      return resData.categories;
    } catch {
      return;
    }
  }
);

export const fetchByCategory = createAsyncThunk(
  "meals/getByCategory",
  async (type) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`
      );
      const resData = await response.json();
      return resData.meals;
    } catch {
      return;
    }
  }
);

export const fetchMealDetails = createAsyncThunk(
  "meals/getMealDetails",
  async (id) => {
    try {
      const response = await fetch(
        `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const resData = await response.json();
      return resData.meals;
    } catch {
      return;
    }
  }
);

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      state.AllCategories = action.payload;
    },
    [fetchByCategory.fulfilled]: (state, action) => {
      state.mealsByCategory = action.payload;
    },
    [fetchMealDetails.fulfilled]: (state, action) => {
      state.mealDetails = action.payload;
    },
  },
});

export default mealsSlice.reducer;
