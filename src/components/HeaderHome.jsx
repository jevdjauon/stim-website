import React from "react";
import Container from "../components/Container";
import { colors } from "../theme.config";
import styled from "styled-components";
import Button from "../UI/Button";
import { btn } from "../lang.config";
import { animated, useSpring, useTrail } from "react-spring";

const HeaderContent = styled.div`
  background: white;
  max-width: 480px;
  grid-column: 2 / 3;
  grid-row: 1 / 1;
  margin-top: 390px;
  height: calc(100vh - 390px);
  padding: 90px 70px 0 70px;
  @media only screen and (max-width: 1440px) {
    //height: calc(100vh - 0px);
  }
  @media only screen and (max-width: 1366px) {
    position: relative;
    grid-column: 1 / end;
    max-width: 100vw;
    width: 100vw;
    //height: 448px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 0px;
    border-bottom: 2px solid ${colors.primary};
    padding: 0 20vw 70px;
    height: auto;
  }
  @media only screen and (max-width: 450px) {
    position: absolute;
    top: 0;
    max-height: 500px;
    padding-top: 100px;
    border-bottom: none;
  }
`;

const HeadText = styled(animated.p)`
  font-size: 60px;
  line-height: 80px;
  letter-spacing: 0.02em;
  //padding: 90px 70px 0 70px;
  font-family: "Playfair Display", serif !important;
  margin: 0 0 10px 0;
  @media only screen and (max-width: 1440px) {
    //margin-top: -184px;
    font-size: 40px;
  }
  @media only screen and (max-width: 1366px) {
    max-width: 800px;
    margin: auto;
  }
`;

const items = ["Limitless ideas brings to your"];
const redItem = ["reality"];
// const config = { mass: 5, tension: 2000, friction: 200 };

const HeaderHome = props => {
  const trail = useTrail(items.length, {
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 }
  });
  const trailRed = useTrail(redItem.length, {
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 }
  });
  const animation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: {
      opacity: 0,
      transform: "translateY(25%)"
    }
  });
  let { language } = props;

  return (
    <Container>
      <HeaderContent style={animation}>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
          >
            <HeadText style={{ height }}>{items[index]}</HeadText>
          </animated.div>
        ))}
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={redItem[index]}
            className="trails-textRed"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
          >
            <HeadText style={{ height }}>{redItem[index]}</HeadText>
          </animated.div>
        ))}
        <div style={{ margin: "50px 0 0 0" }}>
          <Button text={language === "srb" ? btn.srb[0] : btn.eng[0]} to="/page-2" />
        </div>
      </HeaderContent>
    </Container>
  );
};

export default HeaderHome;
