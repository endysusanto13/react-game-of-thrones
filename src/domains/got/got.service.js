import { fetchJson } from "lib/fetch-json";
import { COMMENTS_URL, GOT_URL } from "const";

export const createComment = ({ characterId, rating, comment, accessToken }) =>
  fetchJson(`${COMMENTS_URL}/comment/${characterId}`, {
    method: "POST",
    body: {
      item_id:characterId,
      rating,
      comment
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getComments = (characterId, accessToken, signal) =>
  fetchJson(`${COMMENTS_URL}/comment/${characterId}`, { 
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    signal,
  });

export const deleteComments = ({ commentId, accessToken }) =>
  fetchJson(`${COMMENTS_URL}/comment/${commentId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getCharacterListings = (signal) =>
  fetchJson(`${GOT_URL}/api/v2/Characters`, {
    signal,
  });

export const getCharacterDetails = (characterId, signal) =>
  fetchJson(`${GOT_URL}/api/v2/Characters/${characterId}`, {
    signal,
  }); 