import { Flex, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      marginTop={3}
      marginBottom={3}
      color="teal"
    >
      <Spinner size="xl" />
    </Flex>
  );
};

export default Loader;
