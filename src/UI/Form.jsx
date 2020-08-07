import React from "react"
import styled from "styled-components"
import { colors } from "../theme.config"

const inputArea = {
  width: "600px",
  height: "70px",
  background: `${colors.gray}`,
  border: "none",
  marginBottom: "40px",
  padding: "0 20px",
}

const msgArea = {
  width: "600px",
  height: "200px",
  background: `${colors.gray}`,
  border: "none",
  marginBottom: "40px",
  padding: "20px 20px",
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Form = props => {
  return (
    <form>
      <Flex>
        <input
          style={inputArea}
          type="text"
          name="firstname"
          placeholder={props.name}
        />
        <input
          style={inputArea}
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea style={msgArea} name="subject" placeholder={props.msg} />
        {/* <input type="submit" value="Submit" /> */}
      </Flex>
    </form>
  )
}

export default Form
