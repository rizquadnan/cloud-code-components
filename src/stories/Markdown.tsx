import React from "react";
import ReactMarkdown from "react-markdown";

export interface MarkdownProps {
  children: string;
}

export const Markdown = ({ children }: MarkdownProps) => {
  return <ReactMarkdown>{children}</ReactMarkdown>;
};
