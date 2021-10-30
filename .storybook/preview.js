import React from "react"
import { CSSReset } from "@chakra-ui/css-reset";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]