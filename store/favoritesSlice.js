import { createReducer, createAction } from "@reduxjs/toolkit";

export const toggleFavorite = createAction("toggleFavorites");

const initialState = {
  favorites: [],
};

const favoritesReducer = createReducer(initialState, (builder) => {});

export default favoritesReducer;
