import { Box, Stack } from "@mui/material";
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
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: {
                  xl: "50px",
                  lg: "35px",
                  md: "5%",
                },
              }}
            >
              {favourites.data.map((item) => (
                <FavItem item={item} key={item._id} />
              ))}
            </Stack>
          ) : (
            <ErrorMessage error={favourites.error} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default FavouritesitemsPage;
