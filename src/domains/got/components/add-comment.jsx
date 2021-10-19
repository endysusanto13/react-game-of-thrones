import * as React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";

import { FireIcon as FireSolid } from "@heroicons/react/solid"
import { FireIcon as FireOutline } from "@heroicons/react/outline"

import { useCreateComment } from "domains/got";
import { Button } from "components/button";


const validationSchema = Yup.object({
  comment: Yup.string().required("Unable to submit empty comment."),
});

export const AddComment = ({ characterId, username }) => {
  const textAreaRef = React.useRef();
  const createComment = useCreateComment();
  const [rating, setRating] = React.useState(0);
  
  const formik = useFormik({
    initialValues: {
      characterId,
      comment: "",
    },
    validationSchema,
    onSubmit: (values) => {
      createComment.mutate(
        {
          ...values,
          rating
        },
        {
          onSuccess: () => {
            formik.resetForm();
            setRating(0);

            if (textAreaRef.current) {
              textAreaRef.current.focus();
            }
          },
        }
      );
    },
  });

  return(
    <div className="flex flex-col space-y-2 bg-gray-300 p-4 rounded-3xl">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-row justify-between items-center">
          <span className="text-base font-bold pl-2">{username}</span>
          <span className="flex flex-row justify-center items-center">
            {Array(5).fill("")
              .map((_, index) => {
                if (index < rating) { return <FireSolid 
                  onMouseEnter={() => setRating(index+1)}
                  className={"w-8 h-8 text-blue-400"} key={index}/>}
                  
                else { return <FireOutline 
                  onMouseEnter={() => setRating(index+1)}
                  className={"w-8 h-8 text-blue-400"} key={index}/>}
              })
            }
            <span className={"text-lg text-black font-bold pl-2"}>{rating}</span>
            <span className={"text-base text-black"}>/5</span>
          </span>
        </div>
            {rating === 0 && (
              <div className="flex flex-row justify-end pl-2 text-base text-red-400 italic">
                Please rate the character as well!
              </div>
            )}
        <textarea
          name="comment"
          id="comment"
          className="h-24 block w-full shadow-sm sm:text-sm focus:ring-yellow-400 focus:border-yellow-400 border-gray-300 rounded-md"
          placeholder="Enter comments here..."
          value={formik.values.comment}
          onChange={formik.handleChange}
          ref={textAreaRef}
          onBlur={formik.handleBlur}
          disabled={createComment.isLoading}
        />
        {formik.touched.comment && formik.errors.comment && (
          <div className="pl-2 block text-base text-red-500">
            {formik.errors.comment}
          </div>
        )}
        <div className="flex flex-row justify-end pt-2">
          <Button
            type="submit"
            variant="primary"
            className="h-9 bg-blue-400"
            disabled={rating === 0 || createComment.isLoading}
          >
            Add Commment
          </Button>
        </div>
        
      </form>
    </div>
  );
}

AddComment.propTypes = {
  characterId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
};