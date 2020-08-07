import React, { Component } from "react";
import styled from "styled-components";
import { btn, nav, onama } from "../lang.config";
import { colors } from "../theme.config";
import Button from "../UI/Button";
import { onamaEng, onamaLogo } from "../images/svg";
import "./styles.css";
import NaslovSenka from "../UI/NaslovSenka";

const Left = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / end;
  max-width: 480px;
  @media only screen and (max-width: 1440px) {
    grid-column: 2 / 4;
    //grid-row: 3 / end;
  }
  @media only screen and (max-width: 1366px) {
    max-width: 100vw;
    width: 100vw;
  }
  @media only screen and (max-width: 700px) {
    //width: 80vw;
  }
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  max-width: 348px;
  color: ${colors.textGray};
  @media only screen and (max-width: 1366px) {
    max-width: 100vw;
    margin: auto;
    width: 700px;
  }
  @media only screen and (max-width: 700px) {
    max-width: 80vw;
    width: 80vw;
  }
`;

const Right = styled.div`
  grid-column: 3 / 4;
  grid-row: 3 / end;
  height: 50px;
  @media only screen and (max-width: 1440px) {
    grid-column: 4 / end;
    grid-row: 3 / end;
  }
  @media only screen and (max-width: 1366px) {
    max-width: 100vw;
    width: 100vw;
  }
  @media only screen and (max-width: 450px) {
    //max-width: 80vw;
    //width: 80vw;
    min-height: 300px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 320px 480px 1fr 160px;
  grid-template-rows: 100px 1fr 1fr;
  margin-top: 50px;
  @media only screen and (max-width: 1440px) {
    grid-template-columns: 100px 160px 1fr 100px;
  }
  @media only screen and (max-width: 1366px) {
    margin-top: 0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 80vw;
    //border-bottom: 2px solid ${colors.primary};
    min-height: 800px;
  }
  @media only screen and (max-width: 700px) {

  }
`;

const NaslovSml = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: ${colors.textBold};
  @media only screen and (max-width: 1366px) {
    margin-top: 50px;
  }
`;

const TextR = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  max-width: 800px;
  color: ${colors.textGray};
  @media only screen and (max-width: 1366px) {
    max-width: 100vw;
    width: 700px;
    margin: auto auto 50px;
  }
  @media only screen and (max-width: 700px) {
    max-width: 80vw;
    width: 80vw;
  }
`;

const Line = styled.div`
  width: 800px;
  height: 10px;
  background: ${colors.secundary};
  margin-top: 300px;
  position: absolute;
  right: 0;
  @media only screen and (max-width: 1440px) {
    display: none;
  }
`;

const Sqr = styled.div`
  width: 140px;
  height: 275px;
  background: ${colors.secundary};
  margin-top: -275px;
  position: absolute;
  // top: 0;
  right: 0;
`;

class OnamaHome extends Component {
  render() {
    let { language } = this.props;
    return (
      <Grid>
        <Left>
          <NaslovSenka
            logo={language === "srb" ? onamaLogo : onamaEng}
            naslov={language === "srb" ? nav.srb.onama[0] : nav.eng.aboutUs[0]}
          />
          <Text>{language === "srb" ? onama.srb.one[0] : onama.eng.one[0]}</Text>
        </Left>
        <Right>
          <NaslovSml>{language === "srb" ? onama.srb.one[1] : onama.eng.one[1]}</NaslovSml>
          <TextR>{language === "srb" ? onama.srb.one[2] : onama.eng.one[2]}</TextR>
          <Button text={language === "srb" ? btn.srb[0] : btn.eng[0]} to="/Onama" />
          <Line />
          <Sqr />
        </Right>
      </Grid>
    );
  }
}

export default OnamaHome;
