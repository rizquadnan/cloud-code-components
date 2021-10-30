import { theme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/provider";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { CSSReset } from "@chakra-ui/css-reset";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
