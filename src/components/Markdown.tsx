import React from "react";
import ReactMarkdown from "react-markdown";

const Markdown = ({ children }: MarkdownProps) => {
  return <ReactMarkdown>{children}</ReactMarkdown>;
};

export interface MarkdownProps {
  children: string;
}

export default Markdown;
