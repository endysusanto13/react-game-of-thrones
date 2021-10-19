import { useMutation, useQuery, useQueryClient } from "react-query";
import { useAuth } from "domains/auth";
import { getComments, createComment, deleteComments  } from "../got.service";


export const useGetComments = (characterId) => {
  const { accessToken } = useAuth();

  return useQuery(["commentsList", characterId], () => getComments(characterId, accessToken), {
    staleTime: 3000,
  });
};

export const useCreateComment = () => {
  const { accessToken } = useAuth();

  const queryClient = useQueryClient();
  return useMutation(({ characterId, rating, comment }) => createComment( { characterId, rating, comment, accessToken }), {
    onSuccess: () => queryClient.invalidateQueries("commentsList"),
  });
};

export const useDeleteComments = () => {
  const { accessToken } = useAuth();

  const queryClient = useQueryClient();
  return useMutation(({ commentId }) => deleteComments( { commentId, accessToken }), {
    onSuccess: () => queryClient.invalidateQueries("commentsList"),
  });
};