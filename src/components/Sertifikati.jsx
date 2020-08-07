import React, { Component } from "react";
import styled from "styled-components";
import { onama } from "../lang.config";
import { colors } from "../theme.config";
import s1 from "../images/Sertifikati/s1.jpg";
import s2 from "../images/Sertifikati/s2.jpg";
import s3 from "../images/Sertifikati/s3.jpg";
import s4 from "../images/Sertifikati/s4.jpg";
import s5 from "../images/Sertifikati/s5.jpg";
import s6 from "../images/Sertifikati/s6.jpg";
import { sertiEng, sertiLogo } from "../images/svg";
import "./styles.css";
import NaslovSenka from "../UI/NaslovSenka";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 320px 480px 1fr 160px;
  grid-template-rows: 100px 1fr 1fr;
  margin-top: ${props => (props.top ? "150px" : "700px")};
  @media only screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    //margin-top: ${props => (props.topRes ? "null" : "0")} !important;
  }
  @media only screen and (max-width: 1366px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 800px auto auto;
  }
  @media only screen and (max-width: 450px) {
    margin-top: 1000px;
  }
`;

const Left = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / end;
  max-width: 480px;
  @media only screen and (max-width: 1366px) {
    //text-align: center;
    max-width: 100vw;
  }
`;

const Naslov = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  line-height: 107px;
  margin-bottom: 145px;
  color: ${colors.textBold};
  @media only screen and (max-width: 1366px) {
    //margin: auto;
    margin-left: -120px;
    //  srediti da ne bude hardcode
  }
  @media only screen and (max-width: 700px) {
    //text-align: center;
    //margin: auto;
    margin-left: 0;
  }
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  margin-top: 40px;
  color: ${colors.textGray};
  @media only screen and (max-width: 700px) {
    //width: 80vw;
    text-align: center;
  }
`;

const Right = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / end;
  height: 50px;
  @media only screen and (max-width: 1440px) {
    grid-column: 2 / 4;
    grid-row: 3 / end;
    margin-top: -150px;
  }
  @media only screen and (max-width: 700px) {
    //width: 80vw;
  }
`;

const SerImg = styled.div`
  grid-column: 2 / 4;
  grid-row: 3 / end;
  @media only screen and (max-width: 1366px) {
    //max-width: 800px;
    text-align: center;
    margin-top: 100px;
  }
`;

class Sertifikati extends Component {
  render() {
    let { language } = this.props;

    return (
      <Grid top={this.props.top}>
        <Left>
          <Naslov>
            <NaslovSenka
              logo={language === "srb" ? sertiLogo : sertiEng}
              naslov={language === "srb" ? onama.srb.fourFive[0] : onama.eng.fourFive[0]}
            />
          </Naslov>
        </Left>
        <Right>
          <Text>{language === "srb" ? onama.srb.fourFive[1] : onama.eng.fourFive[1]}</Text>
        </Right>
        <SerImg>
          <a target="_blanc" href={s1}>
            <img className="sertiImg" src={s1} alt="" />
          </a>
          <a target="_blanc" href={s2}>
            <img className="sertiImg" src={s2} alt="" />
          </a>
          <a target="_blanc" href={s3}>
            <img className="sertiImg" src={s3} alt="" />
          </a>
          <a target="_blanc" href={s4}>
            <img className="sertiImg" src={s4} alt="" />
          </a>
          <a target="_blanc" href={s5}>
            <img className="sertiImg" src={s5} alt="" />
          </a>
          <a target="_blanc" href={s6}>
            <img className="sertiImg" src={s6} alt="" />
          </a>
        </SerImg>
      </Grid>
    );
  }
}

export default Sertifikati;
