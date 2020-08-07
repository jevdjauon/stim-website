import React, { Component } from "react";
import Layout from "../components/layout";
import HeaderImg from "../images/header.png";
import styled from "styled-components";
import HeaderHome from "../components/HeaderHome";
import Header from "../components/Header";
import FooterHome from "../components/FooterHome";
import { nav, onama } from "../lang.config";
import { colors } from "../theme.config";
import Sertifikati from "../components/Sertifikati";
import {
  onamaEng,
  onamaLogo,
  pocetakEng,
  pocetakLogo,
  poslovanjeEng,
  poslovanjeLogo,
  timEng,
  timLogo,
  zastitaEng,
  zastitaLogo
} from "../images/svg";
import "../components/styles.css";
import NaslovSenka from "../UI/NaslovSenka";
import { Link } from "gatsby";
import LogoImg from "../images/STIMLOGO.png";
import close from "../images/close.png";
import menu from "../images/menu.png";
import { Accordion, AccordionItem } from "react-light-accordion";
// import { Link } from "gatsby"
// import SEO from "../components/seo"

const ImageHeader = styled.img`
  height: 100vh;
  width: 100vw !important;
  position: absolute;
  top: 0;
  z-index: -1;
  object-fit: fill;
  @media only screen and (max-width: 1366px) {
    min-width: 120vw;
    margin-left: -20vw;
    height: auto;
    object-fit: scale-down;
    position: relative;
  }
  @media only screen and (max-width: 450px) {
    margin-top: 500px;
  }
`;

const LngBtn = styled.div`
  width: 140px;
  height: 140px;
  position: fixed;
  right: 0;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 101;
  @media only screen and (max-width: 1440px) {
    height: 100px;
  }
`;

const Naslov = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  line-height: 107px;
  color: ${colors.textBold};
  text-align: ${props => (props.center ? "center" : "start")};
  margin-bottom: 50px;
  @media only screen and (max-width: 1366px) {
    width: 100vw;
    text-align: center;
  }
`;

const Content = styled.div`
  width: calc(100vw - 640px);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 200px;
  @media only screen and (max-width: 1440px) {
    width: calc(100vw - 200px);
  }
  @media only screen and (max-width: 1366px) {
    width: 80vw;
  }
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FlexRowCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${colors.secundary};
  border-bottom: 2px solid ${colors.primary};
  margin-bottom: 150px;
`;

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  color: ${colors.textGray};
  text-align: ${props => (props.center ? "center" : "start")};
  margin-bottom: ${props => (props.bottom ? "50px" : null)};
  padding: ${props => (props.padding ? "50px" : null)};
  @media only screen and (max-width: 1366px) {
    text-align: center;
  }
`;

const TextRed = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  color: ${colors.textBold};
  text-align: start;
  margin-bottom: ${props => (props.bottom ? "50px" : null)};
  padding: ${props => (props.padding ? "50px" : null)};
  background: ${colors.secundary};
  padding: 70px 120px 70px 320px;
  margin-left: -320px;
  border-bottom: 2px solid ${colors.primary};
  max-width: 1300px;
`;

const NaslovSml = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: ${colors.textBold};
  text-align: start;
  margin-bottom: 50px;
  @media only screen and (max-width: 1366px) {
    text-align: center;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const links = {
  textDecoration: "none",
  color: "black"
};

const TopBar = styled.p`
  z-index: 100;
  position: fixed !important;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 100vw;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: white;
`;

const MenuBtn = styled.p`
  background: white;
  color: black;
  width: 100px;
  height: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TextAcc = styled.a`
  font-size: 20px;
  line-height: 24px;
  text-decoration: none;
  color: ${colors.textGray};
  margin: 5px 0;
  :last-child {
    margin-bottom: 20px;
  }
`;

const Navbar = styled.div`
  padding: 150px 0 50px 0;
  z-index: 99;
  width: 100vw;
  height: 100vh !important;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 450px) {
    padding: 100px 0 100px 0;
    font-size: 25px;
  }
`;

const TextResp = styled.p`
  margin: 0;
  text-decoration: none;
`;

class Onama extends Component {
  state = {
    language: "",
    // loaded: true
    sirina: "",
    menuVisible: false
  };

  componentDidMount = () => {
    let language = localStorage.getItem("StimLang");
    this.setState({ language: language });
    let sirina = window.innerWidth;
    this.setState({ sirina: sirina });
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    // window.removeEventListener("resize", this.updateWindowDimensions);
  };

  engLanguage = () => {
    localStorage.setItem("StimLang", "eng");
    this.setState({ language: "eng" });
  };

  srbLanguage = () => {
    localStorage.setItem("StimLang", "srb");
    this.setState({ language: "srb" });
  };

  updateWindowDimensions = () => {
    this.setState({
      sirina: window.innerWidth
    });
  };

  openMenu = e => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  closeMenu = e => {
    this.setState({ menuVisible: false });
  };

  render() {
    let lang = this.state.language;
    let sirinaB = this.state.sirina;

    return (
      <Layout>
        {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
        {sirinaB <= 1000 ? null : (
          <LngBtn>
            <div>
              <div className="langButton">
                {/* <img alt="" src={lang === "srb" ? eng : srb} /> */}
                {lang === "srb" ? (
                  <button onClick={() => this.engLanguage()}>EN</button>
                ) : (
                  <button onClick={() => this.srbLanguage()}>SR</button>
                )}
              </div>
            </div>
          </LngBtn>
        )}

        {/*res menu*/}
        {sirinaB > 1000 ? null : (
          <div className="header--menu">
            <TopBar>
              <Flex>
                <Logo>
                  <Link to="/">
                    <img className="imgStl" src={LogoImg} alt="" />
                  </Link>
                </Logo>
                {this.state.menuVisible ? (
                  <MenuBtn onClick={this.openMenu}>
                    <img alt="" src={close} />
                  </MenuBtn>
                ) : (
                  <MenuBtn onClick={this.openMenu}>
                    <img alt="" src={menu} />
                  </MenuBtn>
                )}
              </Flex>
            </TopBar>
            {this.state.menuVisible ? (
              <Navbar>
                <Link style={links} to="/Onama">
                  <TextResp>{lang === "srb" ? nav.srb.onama[0] : nav.eng.aboutUs[0]}</TextResp>
                </Link>
                <Link onClick={this.closeMenu} style={links} to="#proizvodi">
                  <TextResp>{lang === "srb" ? nav.srb.proizvodi[0] : nav.eng.products[0]}</TextResp>
                </Link>
                <Link style={links} to="/Usluge">
                  <TextResp>{lang === "srb" ? nav.srb.usluge[0] : nav.eng.services[0]}</TextResp>
                </Link>
                <Accordion atomic={true}>
                  <AccordionItem title={lang === "srb" ? nav.srb.linkovi[0] : nav.eng.links[0]}>
                    <LinkContainer>
                      <TextAcc target="_blanc" href="http://www.hidmet.gov.rs/">
                        {lang === "srb" ? nav.srb.linkovi[1] : nav.eng.links[1]}
                      </TextAcc>
                      <TextAcc target="_blanc" href="https://www.alims.gov.rs/">
                        {lang === "srb" ? nav.srb.linkovi[2] : nav.eng.links[2]}
                      </TextAcc>
                      <TextAcc target="_blanc" href="https://www.apr.gov.rs">
                        {lang === "srb" ? nav.srb.linkovi[3] : nav.eng.links[3]}
                      </TextAcc>
                      <TextAcc target="_blanc" href="https://www.pks.rs/">
                        {lang === "srb" ? nav.srb.linkovi[4] : nav.eng.links[4]}
                      </TextAcc>
                      <TextAcc target="_blanc" href="https://www.nbs.rs">
                        {lang === "srb" ? nav.srb.linkovi[5] : nav.eng.links[5]}
                      </TextAcc>
                      <TextAcc target="_blanc" href="http://www.posta.rs/struktura/lat/aplikacije/alati/posiljke.asp">
                        {lang === "srb" ? nav.srb.linkovi[6] : nav.eng.links[6]}
                      </TextAcc>
                    </LinkContainer>
                  </AccordionItem>
                </Accordion>
                <Link onClick={this.closeMenu} style={links} to="/#kontakt">
                  <TextResp>{lang === "srb" ? nav.srb.kontakt[0] : nav.eng.contact[0]}</TextResp>
                </Link>
                <div className="langButtonRess">
                  {lang === "srb" ? (
                    <button onClick={() => this.engLanguage()}>EN</button>
                  ) : (
                    <button onClick={() => this.srbLanguage()}>SR</button>
                  )}
                </div>
              </Navbar>
            ) : null}
          </div>
        )}

        {sirinaB <= 1000 ? null : (
          <Header
            language={lang}
            srbLanguage={this.srbLanguage}
            engLanguage={this.engLanguage}
            // siteTitle={data.site.siteMetadata.title}
          />
        )}

        <ImageHeader src={HeaderImg} alt="" />
        <HeaderHome language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
        <Content>
          <div>
            <NaslovSenka
              logo={lang === "srb" ? onamaLogo : onamaEng}
              naslov={lang === "srb" ? nav.srb.onama[0] : nav.eng.aboutUs[0]}
            />
          </div>
          <Text bottom>{lang === "srb" ? onama.srb.one[0] : onama.eng.one[0]}</Text>
          <NaslovSml>{lang === "srb" ? onama.srb.one[1] : onama.eng.one[1]}</NaslovSml>
          <Text bottom>{lang === "srb" ? onama.srb.one[2] : onama.eng.one[2]}</Text>
          <Text bottom>{lang === "srb" ? onama.srb.one[3] : onama.eng.one[3]}</Text>
          <Text bottom>{lang === "srb" ? onama.srb.one[4] : onama.eng.one[4]}</Text>
          <Text bottom>{lang === "srb" ? onama.srb.one[5] : onama.eng.one[5]}</Text>
          <Text bottom>{lang === "srb" ? onama.srb.one[6] : onama.eng.one[6]}</Text>
          <NaslovSenka
            logo={lang === "srb" ? pocetakLogo : pocetakEng}
            naslov={lang === "srb" ? onama.srb.two[3] : onama.eng.two[3]}
          />
          <FlexRow>
            <Text padding>{lang === "srb" ? onama.srb.two[0] : onama.eng.two[0]}</Text>
            <FlexRowCol>
              <Text padding>{lang === "srb" ? onama.srb.two[1] : onama.eng.two[1]}</Text>
              <Text padding>{lang === "srb" ? onama.srb.two[2] : onama.eng.two[2]}</Text>
            </FlexRowCol>
          </FlexRow>
          <Naslov center>
            <NaslovSenka
              logo={lang === "srb" ? timLogo : timEng}
              naslov={lang === "srb" ? onama.srb.three[0] : onama.eng.three[0]}
            />
          </Naslov>
          <Text bottom center>
            {lang === "srb" ? onama.srb.three[1] : onama.eng.three[1]}
          </Text>
          <Text bottom center>
            {lang === "srb" ? onama.srb.three[2] : onama.eng.three[2]}
          </Text>
          <Text bottom center>
            {lang === "srb" ? onama.srb.three[3] : onama.eng.three[3]}
          </Text>
        </Content>
        <Sertifikati top language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
        <Content>
          <Naslov>
            <NaslovSenka
              logo={lang === "srb" ? zastitaLogo : zastitaEng}
              naslov={lang === "srb" ? onama.srb.fourFive[2] : onama.eng.fourFive[2]}
            />
          </Naslov>
          <TextRed>{lang === "srb" ? onama.srb.fourFive[3] : onama.eng.fourFive[3]}</TextRed>
          <Naslov center>
            <NaslovSenka
              logo={lang === "srb" ? poslovanjeLogo : poslovanjeEng}
              naslov={lang === "srb" ? onama.srb.six[0] : onama.eng.six[0]}
            />
          </Naslov>
          <Text center>{lang === "srb" ? onama.srb.six[1] : onama.eng.six[1]}</Text>
          <Text center>{lang === "srb" ? onama.srb.six[2] : onama.eng.six[2]}</Text>
          <Text center>{lang === "srb" ? onama.srb.six[3] : onama.eng.six[3]}</Text>
          <Text center>{lang === "srb" ? onama.srb.six[4] : onama.eng.six[4]}</Text>
        </Content>
        <FooterHome language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
      </Layout>
    );
  }
}

export default Onama;
