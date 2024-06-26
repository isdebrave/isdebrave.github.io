import Template from "components/common/Template";
import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    sessionStorage.removeItem("header");
    sessionStorage.removeItem("searchList");
  }, []);

  return <Template>AboutPage</Template>;
};

export default AboutPage;
