import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../theme.config";
import { kontakt } from "../lang.config";
import ContactForm from "./Form/ContactForm";

const Naslov = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  line-height: 107px;
  color: ${colors.textBold};
  text-align: center;
  max-width: 440px;
  margin: auto;
  margin-bottom: 145px !important;
`;

class KontaktHome extends Component {
  render() {
    let { language } = this.props;

    return (
      <div id="kontakt" style={{ paddingTop: "120px" }}>
        <Naslov>{language === "srb" ? kontakt.srb[5] : kontakt.eng[5]}</Naslov>
        <ContactForm language={language} srbLanguage={this.srbLanguage} engLanguage={this.engLanguage} />
      </div>
    );
  }
}

export default KontaktHome;
