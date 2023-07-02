import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import useGamesList from "../GameList/useGamesList";
import { Game } from "../../types/games";

const getGameTitle = (games: Game[], title: string) => {
  const game = games.find((game) => game.title === title);

  return game ? game.title : "Игра не найдена";
};

const GameDetail = () => {
  const { sortedGames } = useGamesList();
  const { title } = useParams();

  const gameTitle = getGameTitle(sortedGames, String(title));

  return (
    <>
      <Box height="100px" padding={3}>
        <Link to="/">
          <Button>Go to the main page</Button>
        </Link>
      </Box>
      <Flex
        height={"calc(100vh - 100px)"}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          color="blue.600"
          fontSize="2xl"
          whiteSpace="nowrap"
          textOverflow="clip"
        >
          {gameTitle}
        </Text>
      </Flex>
    </>
  );
};

export default GameDetail;
