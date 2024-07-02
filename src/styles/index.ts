/* common style 저장 */

import styled from "@emotion/styled";

export const Wrapper = styled.main`
  position: relative;
  /* margin-left: 250px; */
  padding: 70px;
  flex: 1;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;
