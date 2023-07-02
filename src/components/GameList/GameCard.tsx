import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { Game } from "../../types/games";
import { IMG_URL } from "../../constants";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const getGameCurrencies = (
  currencies: Record<string, { id: number }> | undefined
) => {
  if (!currencies) return null;
  return Object.keys(currencies).join(", ");
};

const GameCard: FC<Props> = ({ game }) => {
  return (
    <Card>
      <CardBody>
        <Link to={`/game/${game.title}`}>
          <Image
            src={`${IMG_URL}/${game.oldKey}.png`}
            alt={game.title}
            borderRadius="lg"
          />
        </Link>
        <Stack mt="6" spacing="1">
          <Heading size="md" overflow="hidden">
            <Text
              color="blue.600"
              fontSize="2xl"
              whiteSpace="nowrap"
              textOverflow="clip"
            >
              {game.title}
            </Text>
          </Heading>
          <Box height={120}>
            <Text>Popularity: {game.collections.popularity}</Text>
            <Text>Provider: {game.provider}</Text>
            {game.real && (
              <Text>Currencies: {getGameCurrencies(game.real)}</Text>
            )}
          </Box>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link to={`/game/${game.title}`}>
            <Button variant="solid" colorScheme="teal">
              Learn More ...
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default memo(GameCard);
