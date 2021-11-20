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
  value: `// go language
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
}`,
  language: "go",
};

export const Javascript = Template.bind({});
Javascript.args = {
  value: `const javascriptFunction = (a, b) => {
      return a + b;
}`,
  language: "javascript",
};

export const Java = Template.bind({});
Java.args = {
  value: `import java.util.Scanner;

public class Life {

    @Override @Bind("One")
    public void show(boolean[][] grid){
        String s = "";
        for(boolean[] row : grid){
            for(boolean val : row)
                if(val)
                    s += "*";
                else
                    s += ".";
            s += "\n";
        }
        System.out.println(s);
    }

    public static boolean[][] gen(){
        boolean[][] grid = new boolean[10][10];
        for(int r = 0; r < 10; r++)
            for(int c = 0; c < 10; c++)
                if( Math.random() > 0.7 )
                    grid[r][c] = true;
        return grid;
    }

    public static void main(String[] args){
        boolean[][] world = gen();
        show(world);
        System.out.println();
        world = nextGen(world);
        show(world);
        Scanner s = new Scanner(System.in);
        while(s.nextLine().length() == 0){
            System.out.println();
            world = nextGen(world);
            show(world);

        }
    }

	// [...]
}`,
  language: `java`,
};

export const NotSupported = Template.bind({});
NotSupported.args = {
  language: "reasonml",
};
