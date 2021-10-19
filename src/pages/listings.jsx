import * as React from "react";
import { ArrowSmLeftIcon, ArrowSmRightIcon, FireIcon } from "@heroicons/react/outline"
import { useListings, useFavourite, NavBar, Footer, Listing } from "domains/got";
import { NumberLabel } from "components/number-label";

export const Listings = () => {
  const { data: listings, page, setPage, lastPage, firstCharacter, lastCharacter } = useListings();
  const { favCharacters, toggleFavourite } = useFavourite();

  return(
    // CONTAINER - WHOLE PAGE
    <div className="container max-w-full mx-auto bg-gray-200">
      <NavBar>
        <div className="flex flex-row items-center justify-center space-x-4">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <ArrowSmLeftIcon className="w-8 h-8 text-white"/>
          </button>
          <NumberLabel
            type=""
            variant="primary"
            className="w-1/12 text-base"
          >
            {page}
          </NumberLabel>
          <button
            type="button"
            disabled={page === lastPage}
            onClick={() => setPage(page + 1)}
          >
            <ArrowSmRightIcon className="w-8 h-8 text-white"/>
          </button>
        </div>
      </NavBar>
      {/* BODY SECTION */}
      <div className="container max-w-5xl mx-auto pt-24 pb-12">
        <div className="space-y-8">
          <span className="flex flex-row justify-center bg-gray-900 rounded-full font-bold text-white text-2xl py-2">
            Your Favourite Characters:
          </span>
          <div className="grid md:grid-cols-6 sm:grid-cols-3 gap-x-4 gap-y-8 bg-gray-300 p-8 rounded-3xl">
            {favCharacters.length === 0 &&
              <span className="col-span-full text-center text-lg">
                You have not selected any favourite characters!<br/>
                <span className="flex flex-row text-center justify-center">
                <span>Click&nbsp;</span>
                <span><FireIcon className="text-gray-800 w-8 h-8"/></span>
                &nbsp;to start!
                </span>
              </span>
            }
            {listings && favCharacters.length > 0 &&
              favCharacters.map((id) => (
                <Listing
                  characterId={id}
                  fullName={listings[id].fullName}
                  family={listings[id].family}
                  imageUrl={listings[id].imageUrl}
                  imageName={listings[id].image}
                  isFavourite={favCharacters.includes(id)}
                  onClick={toggleFavourite}
                  isSmall={true}
                  key={'Bookmarked '+id}
                />
              ))}
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-x-20 gap-y-16">
            {listings &&
              listings.map((character, index) => (
                (firstCharacter <= index && index < lastCharacter) &&
                  <Listing
                    characterId={character.id}
                    fullName={character.fullName}
                    family={character.family}
                    imageUrl={character.imageUrl}
                    imageName={character.image}
                    key={character.id}
                    isFavourite={favCharacters.includes(character.id)}
                    isSmall={false}
                    onClick={toggleFavourite}
                  />
              ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};