import * as React from "react";
import { useState, useEffect } from "react";

export const useFavourite = () => {
  const [favCharacters, setfavCharacters] = useState(() => {
    const saved = localStorage.getItem("favourites");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favCharacters));
  }, [favCharacters]);

  const toggleFavourite = (id) => { 
    if (favCharacters.includes(id)) {
      const index = favCharacters.findIndex((val) => val === id)
      setfavCharacters([...favCharacters.slice(0,index), ...favCharacters.slice(index+1)])
    } else {
      setfavCharacters([...favCharacters, id])
    }
  }

  return {
    favCharacters,
    toggleFavourite
  };
};