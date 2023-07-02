import { Box, Flex, Select } from "@chakra-ui/react";
import useGamesFilters from "./useGamesFilters";
import { FILTER_KEYS } from "../../types/games";

const GameListFilters = () => {
  const { handleChange, filterKey, filterValue, currencies, providers } =
    useGamesFilters();

  return (
    <Box>
      <Flex gap={5}>
        <Box width={200}>
          <Select
            placeholder="Currency"
            value={filterKey === FILTER_KEYS.CURRENCY ? filterValue : ""}
            onChange={(e) => handleChange(e, FILTER_KEYS.CURRENCY)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </Select>
        </Box>

        <Box width={200}>
          <Select
            placeholder="Provider"
            value={filterKey === FILTER_KEYS.PROVIDER ? filterValue : ""}
            onChange={(e) => handleChange(e, FILTER_KEYS.PROVIDER)}
          >
            {providers.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>
    </Box>
  );
};

export default GameListFilters;
