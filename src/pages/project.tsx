import Template from "components/common/Template";
import React, { useEffect } from "react";

const ProjectPage = () => {
  useEffect(() => {
    localStorage.removeItem("header");
    localStorage.removeItem("searchList");
  }, []);

  // 프로젝트 말고, 좋은 글 읽으면 출처 남기고 내 생각 적는 공간
  return <Template>ProjectPage</Template>;
};

export default ProjectPage;
