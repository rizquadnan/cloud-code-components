import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Text,
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
  Code,
  Link,
  Divider,
} from "@chakra-ui/react";

const Markdown = ({ children }: MarkdownProps) => {
  return (
    <ReactMarkdown
      components={{
        h1(props) {
          return <Heading as="h1" fontSize="4xl" {...props} />;
        },
        h2(props) {
          return <Heading as="h2" fontSize="3xl" {...props} />;
        },
        h3(props) {
          return <Heading as="h3" fontSize="2xl" {...props} />;
        },
        h4(props) {
          return <Heading as="h4" fontSize="xl" {...props} />;
        },
        p(props) {
          return <Text fontSize="md" {...props} />;
        },
        ul(props) {
          return <UnorderedList {...props} />;
        },
        ol(props) {
          return <OrderedList {...props} />;
        },
        li(props) {
          return <ListItem {...props} />;
        },
        code(props) {
          return <Code {...props} />;
        },
        a(props) {
          return <Link color="teal.500" {...props} />;
        },
        hr(props) {
          return <Divider marginY={4} {...props} />;
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export interface MarkdownProps {
  children: string;
}

export default Markdown;
