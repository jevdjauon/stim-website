import styled from "styled-components";
import { breakpoint } from "../theme.config";

const Container = styled.div`
  width: 100vw;
  margin-left: 0 !important;
  // margin: none !important;
  display: grid;
  grid-template-columns: 320px 1fr 1fr 160px;
  grid-template-rows: 1fr;
  height: ${({ screen }) => (screen ? "100vh" : "auto")};

  @media only screen and (max-width: 1440px) {
    grid-template-columns: 100px 1fr 1fr 100px;
  }

  @media screen and (min-width: ${breakpoint.xs}) {
    max-width: 576px;
  }
  @media screen and (min-width: ${breakpoint.m}) {
    max-width: 768px;
  }
  @media screen and (min-width: ${breakpoint.l}) {
    max-width: 992px;
  }
  @media screen and (min-width: ${breakpoint.xl}) {
    max-width: 1500px;
  }
`;

export default Container;
