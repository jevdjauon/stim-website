import React, { Component } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
// import SEO from "../components/seo"
import HeaderImg from "../images/header.png";
import styled from "styled-components";
import HeaderHome from "../components/HeaderHome";
import OnamaHome from "../components/OnamaHome";
import ProizvodiHome from "../components/ProizvodiHome";
import UslugeHome from "../components/UslugeHome";
import Sertifikati from "../components/Sertifikati";
import KontaktHome from "../components/KontaktHome";
import FooterHome from "../components/FooterHome";
import Header from "../components/Header";
import "../components/styles.css";
import { nav } from "../lang.config";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import { colors } from "../theme.config";
import LogoImg from "../images/STIMLOGO.png";
import menu from "../images/menu.png";
import close from "../images/close.png";

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
  right: 0px;
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

const Text = styled.p`
  margin: 0;
  text-decoration: none;
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
  height: 100px;
  @media only screen and (max-width: 450px) {
    //height: 60px;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: inherit;
  background: white;
  @media only screen and (max-width: 450px) {
    //width: 60px;
  }
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

class IndexPage extends Component {
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
    let sirinaA = this.state.sirina;

    return (
      <Layout id="outer-container">
        {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
        {sirinaA <= 1000 ? null : (
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

        {sirinaA <= 1000 ? null : (
          <Header
            language={lang}
            srbLanguage={this.srbLanguage}
            engLanguage={this.engLanguage}
            // siteTitle={data.site.siteMetadata.title}
          />
        )}

        {/*res menu*/}

        {sirinaA > 1000 ? null : (
          <div className="header--menu">
            <TopBar>
              <Flex>
                <Logo>
                  <Link to="/" onClick={this.closeMenu}>
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
                  <Text>{lang === "srb" ? nav.srb.onama[0] : nav.eng.aboutUs[0]}</Text>
                </Link>
                <Link onClick={this.closeMenu} style={links} to="#proizvodi">
                  <Text>{lang === "srb" ? nav.srb.proizvodi[0] : nav.eng.products[0]}</Text>
                </Link>
                <Link style={links} to="/Usluge">
                  <Text>{lang === "srb" ? nav.srb.usluge[0] : nav.eng.services[0]}</Text>
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
                  <Text>{lang === "srb" ? nav.srb.kontakt[0] : nav.eng.contact[0]}</Text>
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
        <ImageContainer>
          <ImageHeader src={HeaderImg} alt="" />
        </ImageContainer>
        <HeaderHome language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
        <OnamaHome language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
        <div id="proizvodi">
          <ProizvodiHome language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
        </div>
        <UslugeHome language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
        <Sertifikati language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
        <KontaktHome language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
        <FooterHome language={lang} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
      </Layout>
    );
  }
}

export default IndexPage;
