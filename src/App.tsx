import * as React from "react";
import { Box, Text, Link, VStack, Code, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import CodeEditor from "./components/CodeEditor";

const initialCode = `
// go language

package main
import "fmt"

func sum(a []int, c chan int) {
  sum := 0
  for _, v := range a {
    sum += v
  }
  c <- sum // send sum to c
}

func main() {
  a := []int{7, 2, 8, -9, 4, 0}

  c := make(chan int)
  go sum(a[:len(a)/2], c)
  go sum(a[len(a)/2:], c)
  x, y := <-c, <-c // receive from c

  fmt.Println(x, y, x+y)
}`;

export const App = () => {
  const [code, setCode] = React.useState(initialCode);
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <CodeEditor
            value={code}
            onValueChange={(value) => setCode(value)}
            language="go"
          />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  );
};
