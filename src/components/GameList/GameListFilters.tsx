import { Box, Flex, Select } from "@chakra-ui/react";
import useGamesFilters from "./useGamesFilters";

const GameListFilters = () => {
  const { handleChange, filterKey, filterValue, currencies, providers } =
    useGamesFilters();

  return (
    <Box>
      <Flex gap={5}>
        <Box width={200}>
          <Select
            placeholder="Currency"
            value={filterKey === "currency" ? filterValue : ""}
            onChange={(e) => handleChange(e, "currency")}
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
            value={filterKey === "provider" ? filterValue : ""}
            onChange={(e) => handleChange(e, "provider")}
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
