import * as React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { useAuth, useUsername } from "domains/auth";
import { NavBar, Footer, Listing, useListingDetails, useFavourite, useRandomIds } from "domains/got";
import { AddComment, CommentBox, useGetComments, useDeleteComments } from "domains/got";
import { Button } from "components/button";
import { StarRating } from "components/star-rating";

export const ListingDetails = ({ characterId, listings }) => {
  const { randomIds, setRandomId, randomIdArr } = useRandomIds(characterId);
  const { data : character } = useListingDetails(characterId);
  const { favCharacters, toggleFavourite } = useFavourite();
  
  const { status } = useAuth();
  const { data : user } = useUsername();

  const { data : comments } = useGetComments(characterId);
  const deleteComment = useDeleteComments();

  let avgRating = (comments && comments.length !== 0) ? 
    (comments.reduce((total, comment) => total + Number(comment.rating), 0)) / comments.length
    : 0

  useEffect(() => {
    setRandomId(randomIdArr);
    // Do not put randomIdArr as dependency as it will cause React to reload constantly
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterId, character]);

  // couldn't solve reloading bug after several hours
  const generateRandom = (arr) => {
    return arr.map((id) => (
      <Listing
        characterId={id}
        fullName={listings[id].fullName}
        family={listings[id].family}
        imageUrl={listings[id].imageUrl}
        imageName={listings[id].image}
        isFavourite={favCharacters.includes(id)}
        onClick={toggleFavourite}
        isSmall={true}
        key={'Random '+ id}
      />
    ))
  }

  return(
    <div className="container max-w-full mx-auto bg-gray-200">
      <NavBar/>
      
      {character && (
        <div className="container max-w-5xl mx-auto pt-24 pb-12"> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            <div className="flex flex-col">
              <span className="flex flex-row justify-center bg-gray-900 font-bold text-white py-2 text-xl rounded-3xl">
                {character.fullName}
              </span>
              <img src={character.imageUrl} alt={character.image} className="my-4 rounded-3xl"/>
              {/* Left side details */}
              <table className="table-auto font-sans text-gray-900 text-xl">
                  <tbody>
                    <tr className="align-top">
                      <td className="font-bold pb-1 pl-2 w-1/2">Full Name:</td>
                      <td className="">{character.fullName}</td>
                    </tr>
                    <tr className="align-top">
                      <td className="font-bold pb-1 pl-2">First Name:</td>
                      <td className="">{character.firstName}</td>
                    </tr>
                    <tr className="align-top">
                      <td className="font-bold pb-1 pl-2">Last Name:</td>
                      <td className="">{character.lastName}</td>
                    </tr>
                    <tr className="align-top">
                      <td className="font-bold pb-1 pl-2">Known Title:</td>
                      <td className="">{character.title}</td>
                    </tr>
                    <tr className="align-top">
                      <td className="font-bold pb-1 pl-2">Family:</td>
                      <td className="">{character.family}</td>
                    </tr>
                  </tbody>
                </table>
              
              <div className="text-center pt-4">
                <StarRating 
                  variant="blue"
                  size="14"
                  starNum={avgRating}
                  fontSize="big"
                /> 
                {comments && comments.length !== 0 &&
                  <span className="w-fulltext-base italic">
                      Out of {comments.length} ratings 
                  </span>
                }
              </div>
            </div>

            {/* 2nd and 3rd column */}
            <div className="col-span-2">
              <span className="flex flex-row justify-center bg-gray-900 font-bold text-white py-2 text-xl rounded-3xl">
                Other characters that you might be interested:
              </span>
              <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-x-4 gap-y-8 bg-gray-300 p-8 rounded-3xl mt-4">
                {characterId && listings && listings.length !== 0 && randomIds && randomIds.length > 0 && favCharacters && generateRandom(randomIds)
                }
              </div>

              <div className="flex flex-col pt-8 space-y-4">
                {status === "authenticated" && user &&
                  <AddComment
                    characterId={characterId}
                    username={user.username}
                  />}

                {comments &&
                  comments.map((comment) => (
                    <CommentBox 
                      username={comment.username}
                      rating={comment.rating}
                      comment={comment.comment}
                      key={comment.id}
                    >
                      {user && status === "authenticated" && comment.userId === user.userId && (
                        <div className="flex flex-row justify-end pt-2">
                          <Button
                            type="submit"
                            variant="primary"
                            className="h-9 bg-blue-400"
                            onClick={() => deleteComment.mutate({ commentId : comment.id})}
                          >
                            Delete Commment
                          </Button>
                        </div>
                      )}
                    </CommentBox>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

ListingDetails.propTypes = {
  characterId: PropTypes.number.isRequired,
  listings: PropTypes.array.isRequired,
};