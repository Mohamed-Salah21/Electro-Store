import { Box } from "@mui/material";
import { useFetchFavouritesItems } from "../../hooks/useFavItemsHooks";
import Loader from "../../components/main/Loader";
import ErrorMessage from "../../components/main/ErrorMessage";
import FavItem from "../../components/favs/FavItem";

const FavouritesitemsPage = () => {
  const { favourites, loadingFetchingFavs } = useFetchFavouritesItems();
  return (
    <Box
      sx={{
        pt: "200px",
      }}
    >
      {loadingFetchingFavs ? (
        <Loader />
      ) : (
        <Box
          sx={{
            pt: "70px",
          }}
        >
          {favourites.data?.length > 0 && !favourites.error ? (
            <Box>
              {favourites.data.map((item) => (
                <FavItem item = {item} key = {item._id} />
              ))}
            </Box>
          ) : (
            <ErrorMessage error={favourites.error} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default FavouritesitemsPage;
