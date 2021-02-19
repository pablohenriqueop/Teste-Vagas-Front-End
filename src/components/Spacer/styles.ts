import styled from "styled-components";

interface SpacerProps {
  size: "small" | "medium";
}

const handleSpacerSize = (size: String) => {
  switch (size) {
    case "small":
      return "1.6rem";
    case "medium":
      return "3.2rem";
    default:
      return "1.6rem";
  }
};

export const Container = styled.div<SpacerProps>`
  margin-bottom: ${(props) => handleSpacerSize(props.size)};
`;
