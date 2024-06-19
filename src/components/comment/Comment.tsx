import React, { useEffect, useRef } from "react";

const src = "https://utteranc.es/client.js";
const repo = "isdebrave/isdebrave.github.io";

const Comment = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current === null) return;

    const utterances = document.createElement("script");

    const attributes = {
      src,
      repo,
      "issue-term": "pathname",
      label: "Comment",
      theme: "github-light",
      crossorigin: "anonymous",
      async: "true",
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    ref.current.appendChild(utterances);
  }, []);

  return <div ref={ref} />;
};

export default Comment;
