import styled from "@emotion/styled";
import React from "react";

type OverlayType = {
  onClick: () => void;
  color: string;
};

const Background = styled.div<{ backgroundColor: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
`;

const Overlay: React.FC<OverlayType> = (props) => {
  const { onClick, color } = props;

  return (
    <div onClick={onClick}>
      <Background backgroundColor={color} />
    </div>
  );
};

export default Overlay;
