import { createContext, useState } from "react";

/* Context is needed to pass values b/w components w/o explcitly 
  passing it through props at each level of the tree. Useful for 
  authenctication, theme or preffered language */
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: null,
  removeFavorite: null,
  itemIsFavorite: null,
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // setUserFavorites(userFavorites.concat(favoriteMeetup));
    /* 
    NOTE: React does not process state updates instantly but it schedules them
      It processes them very quickly but not instantly. There may be a case when the state snapshot does 
      not really reflect the latest state as the last state update was not processed yet.
      Instead of passing a new value we can pass a function to state update function so that 
      React will execute it for us so that we get the latest state snapshot
    */
    setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
      return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
