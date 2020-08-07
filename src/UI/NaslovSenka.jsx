import React from "react";
import styled from "styled-components";
import InlineSVG from "svg-inline-react";
import { colors } from "../theme.config";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  position: relative;
  margin-bottom: 100px;
  @media only screen and (max-width: 1366px) {
    width: 100vw;
    align-items: center;
  }
`;

const Naslov = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  line-height: 107px;
  margin-bottom: 145px;
  color: ${colors.textBold};
  position: absolute;
  @media only screen and (max-width: 450px) {
    font-size: 60px;
    line-height: 80px;
  }
`;

const Logo = styled.div`
  //position: absolute;
  margin-left: -320px;
  margin-top: -100px;
  width: 50vw;
  z-index: -5;
  @media only screen and (max-width: 1366px) {
    //align-items: center;
    margin-left: 0;
    margin-top: -50px;
  }
  @media only screen and (max-width: 450px) {
  width: 100vw;
`;

// class NaslovSenka extends Component {
const NaslovSenka = props => {
  // let { language } = this.props;
  return (
    <Container>
      <Logo>
        <InlineSVG src={props.logo} />
      </Logo>
      <Naslov>{props.naslov}</Naslov>
    </Container>
  );
};

export default NaslovSenka;
