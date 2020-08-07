import React, { Component } from "react";
// import { Link } from "gatsby"
import Layout from "../components/layout";
// import SEO from "../components/seo"
import HeaderImg from "../images/header.png";
import styled from "styled-components";
import HeaderHome from "../components/HeaderHome";
import Header from "../components/Header";
import FooterHome from "../components/FooterHome";
import { nav, usluge } from "../lang.config";
import { colors } from "../theme.config";
import NaslovSenka from "../UI/NaslovSenka";
import { uslugeEng, uslugeLogo } from "../images/svg";
import { Link } from "gatsby";
import LogoImg from "../images/STIMLOGO.png";
import close from "../images/close.png";
import menu from "../images/menu.png";
import { Accordion, AccordionItem } from "react-light-accordion";

const ImageContainer = styled.div`
  width: 100vw;
  //height: 100vh;
  overflow: hidden;
`;

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
  @media only screen and (max-width: 1366px) {
    display: flex;
  }
`;

const Content = styled.div`
  width: calc(100vw - 640px);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 100px !important;
  @media only screen and (max-width: 1440px) {
    width: calc(100vw - 200px);
  }
  @media only screen and (max-width: 1366px) {
    width: 80vw;
  }
  @media only screen and (max-width: 700px) {
    //margin-top: 0 !important;
    //width: 80vw;
    margin-top: 150px !important;
  }
`;

// const FlexRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// `

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  color: ${colors.textGray};
`;

const NaslovSml = styled.h2`
  margin-top: 120px;
  margin-bottom: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: ${colors.textBold};
`;

const SqrL = styled.div`
  width: 140px;
  height: 275px;
  background: ${colors.secundary};
  position: absolute;
  left: 0;
  top: 1600px;
`;

const SqrR = styled.div`
  width: 140px;
  height: 160px;
  background: ${colors.secundary};
  position: absolute;
  right: 0;
  top: 1200px;
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
  @media only screen and (max-width: 375px) {
    //font-size: 18px;
  }
`;

const TextResp = styled.p`
  margin: 0;
  text-decoration: none;
`;

class Usluge extends Component {
  state = {
    language: "",
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
    let sirinaC = this.state.sirina;

    return (
      <Layout>
        {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
        {sirinaC <= 1000 ? null : (
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
        {sirinaC > 1000 ? null : (
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

        {sirinaC <= 1000 ? null : (
          <Header
            language={lang}
            srbLanguage={this.srbLanguage}
            engLanguage={this.engLanguage}
            // siteTitle={data.site.siteMetadata.title}
          />
        )}
        <ImageContainer>
          <ImageHeader src={HeaderImg} alt="" />
        </ImageContainer>
        <HeaderHome language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
        <Content>
          <Naslov>
            <NaslovSenka
              logo={lang === "srb" ? uslugeLogo : uslugeEng}
              naslov={lang === "srb" ? nav.srb.usluge[0] : nav.eng.services[0]}
            />
          </Naslov>
          <NaslovSml>{lang === "srb" ? usluge.srb.one[0] : usluge.eng.one[0]}</NaslovSml>
          <Text>{lang === "srb" ? usluge.srb.one[2] : usluge.eng.one[2]}</Text>
          <Text>{lang === "srb" ? usluge.srb.one[3] : usluge.eng.one[3]}</Text>
          <Text>{lang === "srb" ? usluge.srb.one[4] : usluge.eng.one[4]}</Text>
          <Text>{lang === "srb" ? usluge.srb.one[5] : usluge.eng.one[5]}</Text>
          <Text>{lang === "srb" ? usluge.srb.one[6] : usluge.eng.one[6]}</Text>
          <NaslovSml>{lang === "srb" ? usluge.srb.two[0] : usluge.eng.two[0]}</NaslovSml>
          <Text>{lang === "srb" ? usluge.srb.two[1] : usluge.eng.two[1]}</Text>
          <SqrL />
          <SqrR />
        </Content>
        <FooterHome language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
      </Layout>
    );
  }
}

export default Usluge;
