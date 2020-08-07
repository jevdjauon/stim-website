import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { colors } from "../theme.config";
import styled from "styled-components";
import LogoImg from "../images/STIMLOGO.png";
import { nav } from "../lang.config";
import "./Header.css";
import { animated, useSpring } from "react-spring";

const Topbar = styled(animated.div)`
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 140px;
  background-color: transparent;
  display: grid;
  grid-template-columns: 160px 160px 1fr 1fr 160px;
  grid-template-rows: 1fr;
  @media only screen and (max-width: 1440px) {
    height: 100px;
    grid-template-columns: 100px 160px 1fr 100px;
    grid-template-rows: 1fr;
  }
  @media only screen and (max-width: 1366px) {
    grid-template-columns: 100px 100px 1fr 100px;
    grid-template-rows: 100px;
  }
`;

const Logo = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 1;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1440px) {
    grid-column: 2 / 3;
  }
  @media only screen and (max-width: 1366px) {
    grid-column: 2 / 3;
  }
`;

const EmptySpace = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 1;
`;

const TopNav = styled.div`
  grid-column: 4 / 5;
  grid-row: 1 / 1;
  background: white;
  width: 960px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 75px;
  @media only screen and (max-width: 1440px) {
    grid-column: 3 / 4;
  }
  @media only screen and (max-width: 1366px) {
    width: auto;
    justify-content: center;
  }
`;

const TopBtn = styled.a`
  color: ${colors.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  :hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 1366px) {
    //background: white;
    padding: 0 20px 0 20px;
  }
`;

const Links = {
  textDecoration: "none",
  color: `${colors.primary}`
};

const Header = props => {
  const animation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: {
      opacity: 0,
      transform: "translateY(-50%)"
    }
  });

  let { language } = props;
  return (
    <Topbar style={animation}>
      <Logo>
        <Link to="/">
          <img className="imgStl" src={LogoImg} alt="" />
        </Link>
      </Logo>
      <EmptySpace />
      <TopNav>
        <TopBtn>
          <Link style={Links} to="/Onama">
            {language === "srb" ? nav.srb.onama[0] : nav.eng.aboutUs[0]}
          </Link>
        </TopBtn>
        <TopBtn>
          <Link style={Links} to="/#proizvodi">
            {language === "srb" ? nav.srb.proizvodi[0] : nav.eng.products[0]}
          </Link>
        </TopBtn>
        <TopBtn>
          <Link style={Links} to="/Usluge">
            {language === "srb" ? nav.srb.usluge[0] : nav.eng.services[0]}
          </Link>
        </TopBtn>
        <div className="dropdown">
          <TopBtn className="dropbtn">{language === "srb" ? nav.srb.linkovi[0] : nav.eng.links[0]}</TopBtn>
          <div className="dropdown-content">
            <a target="_blanc" href="http://www.hidmet.gov.rs/">
              {language === "srb" ? nav.srb.linkovi[1] : nav.eng.links[1]}
            </a>
            <a target="_blanc" href="https://www.alims.gov.rs/">
              {language === "srb" ? nav.srb.linkovi[2] : nav.eng.links[2]}
            </a>
            <a target="_blanc" href="https://www.apr.gov.rs">
              {language === "srb" ? nav.srb.linkovi[3] : nav.eng.links[3]}
            </a>
            <a target="_blanc" href="https://www.pks.rs/">
              {language === "srb" ? nav.srb.linkovi[4] : nav.eng.links[4]}
            </a>
            <a target="_blanc" href="https://www.nbs.rs">
              {language === "srb" ? nav.srb.linkovi[5] : nav.eng.links[5]}
            </a>
            <a target="_blanc" href="http://www.posta.rs/struktura/lat/aplikacije/alati/posiljke.asp">
              {language === "srb" ? nav.srb.linkovi[6] : nav.eng.links[6]}
            </a>
          </div>
        </div>
        <TopBtn>
          <Link style={Links} to="/#kontakt">
            {language === "srb" ? nav.srb.kontakt[0] : nav.eng.contact[0]}
          </Link>
        </TopBtn>
      </TopNav>
    </Topbar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
