import React, { Component } from "react";
import styled from "styled-components";
import { nav, proizvodi } from "../lang.config";
import { colors } from "../theme.config";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import { proizvodiEng, proizvodiLogo } from "../images/svg";
import "./styles.css";
import NaslovSenka from "../UI/NaslovSenka";

const Grid = styled.div`
  margin-top: 200px;
  width: 100vw;
  display: grid;
  grid-template-columns: 320px 1fr 320px;
  grid-template-rows: 200px 1fr 1fr;
  @media only screen and (max-width: 1440px) {
    margin-top: 0;
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 200px 1fr 1fr;
  }
  @media only screen and (max-width: 1366px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    //width: 80vw;
    margin: auto;
    margin-top: 200px;
    min-height: 1300px;
  }
`;

const Naslov = styled.h1`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-style: normal;
  font-weight: normal;
  color: ${colors.textBold};
`;

const Hover = styled.div`
  margin-top: -80px;
  width: 100%;
  min-height: 400px;
  grid-column: 2 / 3;
  grid-row: 3 / end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 1366px) {
    //margin-top: 500px !important;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    margin: auto;
  }
  @media only screen and (max-width: 700px) {
    //width: 80vw;
  }
`;

const Content = styled.div`
  width: 300px;
  height: 500px;
  border-bottom: 2px solid ${colors.primary};
  margin: 0 10px;
  padding: 40px;
  :hover {
    background: ${colors.primary};
    color: white;
  }
  @media only screen and (max-width: 1366px) {
    height: auto;
    margin-bottom: 50px;
    width: 700px;
  }
  @media only screen and (max-width: 700px) {
    width: 80vw;
  }
`;

const NaslovSml = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  margin-top: 30px;
  margin-bottom: 50px;
  max-width: 200px;
  @media only screen and (max-width: 1366px) {
    max-width: 100%;
    width: 700px;
  }
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  max-width: 250px;
  @media only screen and (max-width: 1366px) {
    max-width: 100%;
    width: 700px;
  }
`;

const Icons = styled.div`
  background: ${colors.primary};
  width: 110px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  @media only screen and (max-width: 1366px) {
    margin: auto;
  }
`;

class ProizvodiHome extends Component {
  render() {
    let { language } = this.props;
    return (
      <Grid>
        <Naslov>
          <NaslovSenka
            logo={language === "srb" ? proizvodiLogo : proizvodiEng}
            naslov={language === "srb" ? nav.srb.proizvodi[0] : nav.eng.products[0]}
          />
        </Naslov>
        <Hover>
          <Content>
            <Icons>
              <img style={{ marginTop: "25px" }} src={icon1} alt="" />
            </Icons>
            <NaslovSml>{language === "srb" ? proizvodi.srb[0] : proizvodi.eng[0]}</NaslovSml>
            <Text>{language === "srb" ? proizvodi.srb[1] : proizvodi.eng[1]}</Text>
          </Content>
          <Content>
            <Icons>
              <img style={{ marginTop: "25px" }} src={icon2} alt="" />
            </Icons>

            <NaslovSml>{language === "srb" ? proizvodi.srb[2] : proizvodi.eng[2]}</NaslovSml>
            <Text>{language === "srb" ? proizvodi.srb[3] : proizvodi.eng[3]}</Text>
          </Content>
          <Content>
            <Icons>
              <img style={{ marginTop: "25px", marginLeft: "10px" }} src={icon3} alt="" />
            </Icons>
            <NaslovSml>{language === "srb" ? proizvodi.srb[4] : proizvodi.eng[4]}</NaslovSml>
            <Text>{language === "srb" ? proizvodi.srb[5] : proizvodi.eng[5]}</Text>
          </Content>
        </Hover>
      </Grid>
    );
  }
}

export default ProizvodiHome;
