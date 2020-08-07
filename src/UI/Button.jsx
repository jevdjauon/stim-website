import React from "react";
import { colors } from "../theme.config";
import styled from "styled-components";
import { Link } from "gatsby";

const Btn = styled.button`
  padding: 27px 57px;
  background: ${colors.gray};
  border: 2px solid ${colors.primary};
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  @media only screen and (max-width: 450px) {
    padding: 14px 24px;
  }
`;

const Button = props => {
  return (
    <Btn>
      <Link className="lnk" to={props.to}>
        {props.text}
      </Link>
    </Btn>
  );
};

export default Button;
