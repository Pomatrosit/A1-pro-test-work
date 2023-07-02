import { Box } from "@chakra-ui/react";
import GameListFilters from "../components/GameList/GameListFilters";
import GameList from "../components/GameList/GameList";

const GameListPage = () => {
  return (
    <Box padding={5}>
      <GameListFilters />
      <GameList />
    </Box>
  );
};

export default GameListPage;
