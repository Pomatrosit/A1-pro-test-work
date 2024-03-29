import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import Loader from "../Loader";
import Alert from "../Alert";
import useGamesList from "./useGamesList";

const GameList = () => {
  const {
    displayedGames,
    isLoading,
    error,
    handleShowMore,
    isShowMoreButtonShowed,
  } = useGamesList();

  if (isLoading) return <Loader />;

  if (error) return <Alert />;

  if (!displayedGames.length)
    return (
      <Box mt={5}>
        <Text textAlign="center" color="teal.600" fontSize={20}>
          Ничего не найдено
        </Text>
      </Box>
    );

  return (
    <Box>
      <SimpleGrid
        gap={5}
        marginTop={7}
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
      >
        {displayedGames.map((game) => (
          <Box key={game.title}>
            <GameCard game={game} />
          </Box>
        ))}
      </SimpleGrid>
      <Flex
        alignItems="center"
        justifyContent="center"
        marginTop={10}
        marginBottom={10}
      >
        {isShowMoreButtonShowed && (
          <Button variant="solid" colorScheme="blue" onClick={handleShowMore}>
            Show More ...
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default GameList;
