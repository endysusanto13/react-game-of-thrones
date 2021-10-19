import { ListingDetails } from "domains/got";
import { useParams } from "react-router-dom";
import { useListings } from "domains/got";

export const ListingDetailsPage = () => {
  const params = useParams();
  const { data: listings } = useListings();

  return(
    <ListingDetails 
    characterId={params.characterId} 
    listings={listings} 
    />
  )
};
