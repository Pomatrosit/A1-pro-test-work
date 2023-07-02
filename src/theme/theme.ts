import { extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

const { Button, Select, Card, Divider, Spinner, Alert } =
  chakraTheme.components;

export const theme = extendBaseTheme({
  components: {
    Button,
    Select,
    Card,
    Divider,
    Spinner,
    Alert,
  },
});
