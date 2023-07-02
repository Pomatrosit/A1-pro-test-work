import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage";
import GameListPage from "./pages/GameListPage";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { theme } from "./theme/theme";

function App() {
  return (
    <Provider store={store}>
      <ChakraBaseProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/game/:title" element={<GameDetailPage />} />
            <Route path="/" element={<GameListPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraBaseProvider>
    </Provider>
  );
}

export default App;
