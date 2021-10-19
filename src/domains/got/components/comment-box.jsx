import * as React from "react";
import PropTypes from "prop-types";
import { StarRating } from "components/star-rating"

export const CommentBox = ({ username, rating, comment, children }) => {
  return(
    <div className="flex flex-col space-y-2 bg-gray-300 p-4 rounded-3xl text-gray-800">
      <div className="flex flex-row justify-between items-center">
        <span className="text-base font-bold pl-2">{username}</span>
        <StarRating 
          variant="blue"
          size="8"
          starNum={rating}
          fontSize="normal"
        />
      </div>
      <span className="py-4 px-4 text-base bg-white rounded-md leading-tight">
        {comment}
      </span>
      <div>{children}</div>
    </div>
  );
}

CommentBox.propTypes = {
  username: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  children: PropTypes.node,
};