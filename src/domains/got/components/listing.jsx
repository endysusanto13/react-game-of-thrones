import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FireIcon as FireSolid } from "@heroicons/react/solid"
import { FireIcon as FireOutline } from "@heroicons/react/outline"

export const Listing = ({ characterId, fullName, family, imageUrl, imageName, isFavourite, onClick, isSmall }) => {
  return(
    <div className="flex flex-col justify-between">
      <span className="relative">
        <span className="flex flex-row justify-center">
          <Link to={`/character/${characterId}`}>
            <img 
              src={imageUrl} 
              alt={imageName}
              className={"rounded-full object-cover " + (isSmall ? "w-32 h-32": "w-64 h-64")}
            />
          </Link>
        </span>
        <span className="absolute bottom-0 right-0">
          <button
            type="button"
            onClick={() => onClick(characterId)}
          >
            {isFavourite ? 
              (<FireSolid className={"text-gray-800 " + (isSmall ? "h-6 w-6": "h-10 w-10")}/>
            ) : (
              <FireOutline className={"text-gray-800 " + (isSmall ? "h-6 w-6": "h-10 w-10")}/>
            )}
          </button>
        </span>
      </span>
      <span className={"flex flex-row justify-center bg-gray-900 font-bold text-white py-1 " + (isSmall ? "text-sm" : "text-xl")}>
        {fullName}
      </span>
      <span className={"flex flex-row justify-center text-gray-900 py-1 " + (isSmall ? "text-sm" : "text-lg font-bold")}>
        {family}
      </span>
      </div>
  );
};

Listing.propTypes = {
  characterId: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  isFavourite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isSmall: PropTypes.bool,
};