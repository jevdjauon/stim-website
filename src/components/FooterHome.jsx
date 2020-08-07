import React, { Component } from "react";
import styled from "styled-components";
import { kontakt } from "../lang.config";
import { colors } from "../theme.config";

const Grid = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: 320px 1f1 1fr 320px;
  grid-template-rows: 200px 1fr 1fr;
  border-top: 1px solid ${colors.gray};
  @media only screen and (max-width: 1366px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    text-align: center;
  }
`;

const Left = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / end;
`;

const NaslovSml = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: ${colors.textBold};
  max-width: 220px;
  padding-right: 20px;
  @media only screen and (max-width: 1366px) {
    max-width: 100vw;
    padding-right: 0;
  }
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  color: ${colors.textGray};
  margin: 0 0 25px;
`;

const TextA = styled.div`
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  color: ${colors.textGray};
  margin: 0 0 25px;
`;

const TextB = styled.p`
  font-style: normal;
  font-weight: normal;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 27px;
  color: ${colors.textGray};
  margin: 0 0 25px;
`;
const Right = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / end;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media only screen and (max-width: 1366px) {
    flex-direction: column;
    width: 100vw;
  }
`;

const Gray = styled.div`
  padding-left: 50px;
  @media only screen and (max-width: 1366px) {
    padding-left: 0;
  }
`;

class FooterHome extends Component {
  state = {
    sirina: null
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  };

  updateWindowDimensions = () => {
    this.setState({
      sirina: window.screen.width
    });
  };

  render() {
    const { language } = this.props;
    let sirinaB = this.state.sirina;
    return (
      <Grid>
        <Left>
          <Flex>
            <NaslovSml>STIM d.o.o.</NaslovSml>
            <Gray>
              <TextB>{language === "srb" ? kontakt.srb[0] : kontakt.eng[0]}</TextB>
              <Text>
                {language === "srb" ? kontakt.srb[2] : kontakt.eng[2]}
                {language === "srb" ? kontakt.srb[3] : kontakt.eng[3]}
              </Text>
              <TextA>
                <a href="tel:381-11-301-8480">tel +381 11 / 301 - 8480</a>
              </TextA>
              <Text>fax +381 11 / 214 - 6842</Text>
              <TextA>
                <a href="mailto:office@stim.rs">email office@stim.rs</a>
              </TextA>
              <Text>PIB 100228299</Text>
              <Text>MB 17243209</Text>
            </Gray>
          </Flex>
        </Left>
        <Right>
          <Flex>
            <NaslovSml>{language === "srb" ? kontakt.srb[4] : kontakt.eng[4]}</NaslovSml>
            <div>
              {sirinaB <= "1366px" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d707.5492149760998!2d20.416192!3d44.817554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65636183d75d%3A0x3c1d38d1dedd92bf!2sSTIM+d.o.o.!5e0!3m2!1sen!2sus!4v1557557328043!5m2!1sen!2sus"
                  width="80vw"
                  height="260"
                  frameBorder="0"
                  title="location"
                  // allowfullscreen
                />
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d707.5492149760998!2d20.416192!3d44.817554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65636183d75d%3A0x3c1d38d1dedd92bf!2sSTIM+d.o.o.!5e0!3m2!1sen!2sus!4v1557557328043!5m2!1sen!2sus"
                  width="380"
                  height="260"
                  frameBorder="0"
                  title="location"
                  // allowfullscreen
                />
              )}
            </div>
          </Flex>
        </Right>
      </Grid>
    );
  }
}

export default FooterHome;
