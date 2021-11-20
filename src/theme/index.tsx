import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    lightGray: {
      default: "#C4C4C4",
      hover: "#EEEEEE",
      disabled: "#9E9E9E",
    },
  },
  fontSizes: {
    xxs: "0.625rem",
  },
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  notebookCellLeftPadding: 75,
  iconSize: 4,
});

export default customTheme;
