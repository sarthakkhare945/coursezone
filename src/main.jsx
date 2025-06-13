import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { ChakraProvider } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.jsx";
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// const theme = extendTheme({});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
