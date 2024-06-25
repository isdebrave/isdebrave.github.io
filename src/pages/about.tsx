import Template from "components/common/Template";
import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    localStorage.removeItem("header");
    localStorage.removeItem("searchList");
  }, []);

  return <Template>AboutPage</Template>;
};

export default AboutPage;
