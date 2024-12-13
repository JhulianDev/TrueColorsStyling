import { Link } from "react-router-dom";
import styled from "styled-components";
import { fonts } from "../../../../assets/styles/FontsHandler";

export const Button = styled(Link)`
  background-color: ${(props) => props.$bgColor};
  color: ${(props) => props.$color};
  margin-top: ${(props) => props.$marginTop};
  padding: 20px 30px;
  border-radius: 7px;
  text-align: center;
  font-family: ${fonts.MainTypography};
  font-size: 1.2rem;
  font-weight: 600;
  transition: all .2s ease;
  z-index: 10;

  &:hover{
    background-color: ${(props) => props.$bgColorHover};
    color: ${(props) => props.$colorHover};
  }
`