import {
  AlertIcon,
  AlertTitle,
  Alert as AlertComponent,
} from "@chakra-ui/react";

const Alert = () => {
  return (
    <AlertComponent status="error" marginTop={3} marginBottom={3}>
      <AlertIcon />
      <AlertTitle>Something went wrong!</AlertTitle>
    </AlertComponent>
  );
};

export default Alert;
