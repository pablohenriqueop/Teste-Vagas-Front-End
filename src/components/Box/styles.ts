import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.section`
  background-color: ${theme.colors.veryLightPink};
  border-radius: 8px;
  box-shadow: 10px 22px 34px 0 rgba(0, 0, 0, 0.5);
  margin: 20px auto;
  overflow: hidden;
  width: 550px;
  max-width: 100%;
`;
