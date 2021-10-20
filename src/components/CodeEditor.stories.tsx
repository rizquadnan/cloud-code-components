import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CodeEditor from "./CodeEditor";

export default {
  title: "CodeEditor",
  component: CodeEditor,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CodeEditor>;

const Template: ComponentStory<typeof CodeEditor> = (args) => (
  <CodeEditor {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: `
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
  }
  `,
  language: "go",
};

export const AnotherLanguage = Template.bind({});
AnotherLanguage.args = {
  value: `
    const javascriptFunction = (a, b) => {
      return a + b;
    }
  `,
  language: "javascript",
};
