import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { getIntersectionObserver } from "utils/toc/getIntersectionObserver";

const TocContainer = styled.aside`
  position: sticky;
  top: 80px;
  margin: 100px 0 0 70px;
  width: 200px;

  & > hr {
    margin: 10px 0;
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const Li = styled.li`
  &.active {
    color: #e67e22;
  }

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 10px 0;
`;

const Toc = () => {
  const [activeId, setActiveId] = useState("");
  const [hTagsList, setHTagsList] = useState<Element[]>([]);

  useEffect(() => {
    const post = document.getElementById("post-content")!;
    const list = Array.from(post.querySelectorAll("h1, h2, h3"));

    /* h1, h2, h3에 id 할당 */
    list.forEach((item) => {
      item.id = item.textContent!;
    });

    setHTagsList(list);
  }, []);

  useEffect(() => {
    const observer = getIntersectionObserver(setActiveId);

    hTagsList.forEach((hTag) => observer.observe(hTag));

    return () => observer.disconnect();
  }, [hTagsList]);

  return (
    <TocContainer>
      <h3>목차</h3>
      <hr />
      <ul id="toc-list">
        {hTagsList.map((hTags) => (
          <Li
            key={hTags.textContent}
            className={`${activeId === hTags.textContent ? "active" : ""}`}
          >
            <Link to={`#${hTags.textContent}`}>{hTags.textContent}</Link>
          </Li>
        ))}
      </ul>
    </TocContainer>
  );
};

export default Toc;
