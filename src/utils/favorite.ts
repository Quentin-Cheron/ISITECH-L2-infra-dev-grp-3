type Favorite = {
  id: number;
  title: string;
  href: string;
  date: string;
  imageUrl: string;
  category: { title: string; href: string };
};

export const addFavorite = (id: number, data: Favorite) => {
  localStorage.setItem(`favorite-${id}`, JSON.stringify(data));
};

export const removeFavorite = (id: number) => {
  localStorage.removeItem(`favorite-${id}`);
};

export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};
