import React from "react";
import { Box } from "@chakra-ui/layout";
import { useToken } from "@chakra-ui/system";

function CellWrapper(props: CellWrapperProps) {
  const { mode = "default", children } = props;
  const [blue600] = useToken("colors", ["blue.600"]);

  const commonStyles = {
    border: "1px solid",
    borderRadius: "md",
    padding: "3",
    paddingLeft: "20",
  };

  const styles = {
    default: {
      ...commonStyles,
      borderColor: "transparent",
      borderLeft: `5px solid transparent`,
    },
    active: {
      ...commonStyles,
      borderColor: "gray.200",
      borderLeft: `5px solid ${blue600}`,
    },
  }[mode];

  return <Box {...styles}>{children}</Box>;
}

export interface CellWrapperProps {
  mode?: Mode;
  children: React.ReactNode;
}

export type Mode = "default" | "active";

export default CellWrapper;
