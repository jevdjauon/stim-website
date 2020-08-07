import React from "react";
import styled from "styled-components";
import { colors } from "../../theme.config";

const Btna = styled.button`
  padding: 27px 57px;
  background: ${colors.gray};
  border: 2px solid ${colors.primary};
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  color: \`${colors.primary}\`;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0.3em;
`;

const Button = props => {
  return (
    <Btna className={`button ${props.color}`} {...props}>
      {props.text}
    </Btna>
  );
};

export default Button;
