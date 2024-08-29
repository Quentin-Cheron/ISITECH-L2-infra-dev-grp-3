import { Movies } from "../../types/movies";

// Add a favorite
export const addFavorite = (data: Movies) => {
  const favoriteList = localStorage.getItem("favorites");
  const favorites = JSON.parse(favoriteList || "[]");

  favorites.push(data);

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

// Delete a favorite
export const removeFavorite = (id: number) => {
  const favoriteList = localStorage.getItem("favorites");
  const favorites = JSON.parse(favoriteList || "[]");

  const updatedFavorites = favorites.filter(
    (favorite: Movies) => favorite.id !== id
  );

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};

// Show all favorites

export const getAllFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

// Get favorite items

export const getFavoriteItems = () => {
  const favoriteList = localStorage.getItem("favorites");
  const favorites = JSON.parse(favoriteList || "[]");

  const favoriteItems = favorites.filter(
    (favorite: Movies) => favorite.is_favorite
  );

  return favoriteItems;
};
