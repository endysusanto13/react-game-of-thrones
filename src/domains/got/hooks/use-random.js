import { generateRandomNumbers } from "lib/random-num";
import { useState } from "react";

export const useRandomIds = (id) => {
  const [randomIds, setRandomId] = useState([]);

  const max = 53;
  const qtyOfCharacters = 8;
  const randomIdArr =  generateRandomNumbers(max, qtyOfCharacters, id);
  

  return {
    randomIds,
    setRandomId,
    randomIdArr
  };
}