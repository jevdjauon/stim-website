import React, { Component } from "react";
import styled from "styled-components";
import { btn, nav, usluge } from "../lang.config";
import { colors } from "../theme.config";
import Button from "../UI/Button";
import { uslugeEng, uslugeLogo } from "../images/svg";
import "./styles.css";
import NaslovSenka from "../UI/NaslovSenka";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 320px 480px 1fr 160px;
  grid-template-rows: 200px 1fr 1fr;
  margin-top: 50px;
  @media only screen and (max-width: 1440px) {
    grid-template-columns: 100px 160px 1fr 100px;
    grid-template-rows: 200px 1fr 1fr;
    margin-top: 50px;
  }
  @media only screen and (max-width: 1366px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100vw;
    margin: 150px auto auto;
  }
`;

const Left = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / end;
  max-width: 480px;
  @media only screen and (max-width: 1440px) {
  }
  @media only screen and (max-width: 1366px) {
    text-align: center;
    max-width: 100vw;
  }
  @media only screen and (max-width: 700px) {
    width: 100vw;
  }
`;

const NaslovSml = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: ${colors.textBold};
  @media only screen and (max-width: 1440px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 1366px) {
    margin-top: 0px;
  }
  @media only screen and (max-width: 700px) {
    width: 100vw;
  }
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  max-width: 460px;
  color: ${colors.textGray};
  @media only screen and (max-width: 1366px) {
    width: 700px;
    max-width: 100vw;
    margin: auto auto 50px;
  }
  @media only screen and (max-width: 700px) {
    width: 80vw;
  }
`;

const TextR = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  max-width: 250px;
  margin-left: 90px;
  color: ${colors.textGray};
  @media only screen and (max-width: 1366px) {
    width: 700px;
    max-width: 100vw;
    margin: auto auto 50px;
  }
  @media only screen and (max-width: 700px) {
    width: 80vw;
  }
`;

const Right = styled.div`
  grid-column: 3 / end;
  grid-row: 3 / end;
  height: 50px;
  @media only screen and (max-width: 1366px) {
    //max-width: 100vw;
    //margin: 0;
    width: inherit;
  }
  @media only screen and (max-width: 700px) {
    width: 100vw;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media only screen and (max-width: 1366px) {
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    margin: auto;
  }
  @media only screen and (max-width: 700px) {
    width: 80vw;
  }
`;

const Line = styled.div`
  width: 800px;
  height: 1px;
  background: ${colors.secundary};
  margin-top: 100px;
  position: absolute;
  right: 0;
`;

const Sqr = styled.div`
  width: 160px;
  height: 275px;
  background: ${colors.secundary};
  margin-top: -275px;
  position: absolute;
  // top: 0;
  left: 0;
`;

class UslugeHome extends Component {
  render() {
    let { language } = this.props;

    return (
      <>
        <Grid>
          <Left>
            <NaslovSenka
              logo={language === "srb" ? uslugeLogo : uslugeEng}
              naslov={language === "srb" ? nav.srb.usluge[0] : nav.eng.services[0]}
            />
          </Left>
          <Right>
            <NaslovSml>{language === "srb" ? usluge.srb.one[0] : usluge.eng.one[0]}</NaslovSml>
            <Flex>
              <Text>{language === "srb" ? usluge.srb.one[1] : usluge.eng.one[1]}</Text>
              <TextR>{language === "srb" ? usluge.srb.one[2] : usluge.eng.one[2]}</TextR>
            </Flex>
            <NaslovSml>{language === "srb" ? usluge.srb.two[0] : usluge.eng.two[0]}</NaslovSml>
            <Text>{language === "srb" ? usluge.srb.two[1] : usluge.eng.two[1]}</Text>
            <Button text={language === "srb" ? btn.srb[0] : btn.eng[0]} to="/Usluge" />
            <Line />
            <Sqr />
          </Right>
        </Grid>
      </>
    );
  }
}

export default UslugeHome;
