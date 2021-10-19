import * as React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { getCharacterListings, getCharacterDetails } from "../got.service";

export const useListings = () => {
  const query = useQuery("characters", () => getCharacterListings());

  const [page, setPage] = useState(() => {
    const saved = localStorage.getItem("page");
    const initialValue = Number(saved);
    return initialValue || 1;
  });
  
  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);
  
  // Simulate the effect of pages since the API endpoint provides all the data at one go
  const charactersPerPage = 12;
  let firstCharacter = charactersPerPage * (page - 1);
  let lastCharacter = charactersPerPage * (page);
  const lastPage = query.data ? Math.ceil((query.data.length + 1) / charactersPerPage) : undefined;

  return {
    ...query,
    page,
    setPage,
    lastPage,
    firstCharacter,
    lastCharacter,
  };
};

export const useListingDetails = (characterId) => {
  return useQuery(
    ["characterDetails", characterId],
    () => getCharacterDetails(characterId));
};