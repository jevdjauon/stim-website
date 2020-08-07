import React, { Components } from "react"
import styled from "styled-components"
import { nav, onama } from "../lang.config"
import { colors } from "../theme.config"

const Left = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / end;
  max-width: 480px;
`

const Naslov = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  line-height: 107px;
  margin-bottom: 145px;
  color: ${colors.textBold};
`

const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  max-width: 348px;
  color: ${colors.textGray};
`

const Right = styled.div`
  grid-column: 3 / 4;
  grid-row: 3 / end;
  height: 50px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 320px 480px 1fr 160px;
  grid-template-rows: 200px 1fr 1fr;
`

const NaslovSml = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: ${colors.textBold};
`
const TextR = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  max-width: 800px;
  color: ${colors.textGray};
`

const Line = styled.div`
  width: 800px;
  height: 10px;
  background: ${colors.secundary};
  margin-top: 415px;
  position: relative;
`

const Sqr = styled.div`
  width: 160px;
  height: 275px;
  background: ${colors.secundary};
  margin-top: -275px;
  position: absolute;
  // top: 0;
  right: 0;
`

// class OnamaHome extends Components {
const OnamaHome = props => {
  // engLanguage = () => {
  //   localStorage.setItem("StimLang", "eng")
  //   this.setState({ language: "eng" })
  //   console.log(this.state.language)
  // }

  // srbLanguage = () => {
  //   localStorage.setItem("StimLang", "srb")
  //   this.setState({ language: "srb" })
  //   console.log(this.state.language)
  // }

  // render() {
  // let lang = this.props

  return (
    <Grid>
      <Left>
        <Naslov>
          {props.nas}
          {/* {nav.srb.onama[0]} */}
          {/* {lang === "srb" ? nav.srb.onama[0] : nav.eng.onama[0]} */}
        </Naslov>
        <Text>
          {props.text1}
          {/* {onama.srb.one[0]} */}
          {/* {lang === "srb" ? onama.srb.one[0] : onama.eng.one[0]} */}
        </Text>
      </Left>
      <Right>
        <NaslovSml>
          {props.nasSml}
          {/* {onama.srb.one[1]} */}
          {/* {lang === "srb" ? onama.srb.one[1] : onama.srb.one[1]} */}
        </NaslovSml>
        <TextR>
          {props.textR}
          {/* {onama.srb.one[2]} */}
          {/* {lang === "srb" ? onama.srb.one[2] : onama.srb.one[2]} */}
        </TextR>
        <Line />
        <Sqr />
      </Right>
    </Grid>
  )
}
// }

export default OnamaHome
