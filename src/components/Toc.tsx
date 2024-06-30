import styled from "@emotion/styled";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getIntersectionObserver } from "utils/toc/getIntersectionObserver";

const TocContainer = styled.aside`
  position: sticky;
  top: 80px;
  margin: 80px 0 0 70px;
  width: 200px;

  & > hr {
    margin: 10px 0;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const Ul = styled.ul`
  & > li {
    &.active {
      color: #e67e22;
    }

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 10px 0;
  }
`;

const Toc = () => {
  const [hTagsList, setHTagsList] = useState<Element[]>([]);

  useEffect(() => {
    const post = document.getElementById("post-content")!;
    const list = Array.from(post.querySelectorAll("h1, h2, h3"));

    setHTagsList(list);
  }, []);

  useEffect(() => {
    const tocList = document.getElementById("toc-list")!;

    const observer = getIntersectionObserver(tocList);

    hTagsList.forEach((hTag) => observer.observe(hTag));

    return () => observer.disconnect();
  }, [hTagsList]);

  return (
    <TocContainer>
      <h3>목차</h3>
      <hr />
      <Ul id="toc-list">
        {hTagsList.map((hTags) => (
          <li key={hTags.textContent}>{hTags.textContent}</li>
        ))}
      </Ul>
    </TocContainer>
  );
};

export default Toc;
