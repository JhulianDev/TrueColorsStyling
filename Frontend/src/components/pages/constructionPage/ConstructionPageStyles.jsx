import styled from "styled-components";
import { fonts } from "../../../assets/styles/FontsHandler";
import { colors } from "../../../assets/styles/ColorPalette";

export const Shadow = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  opacity: .3;
`

export const Logo = styled.img`
  max-width: 1000px;
  width: 100%;
  display: flex;
  filter: invert(41%) sepia(62%) saturate(2608%) hue-rotate(150deg) brightness(94%) contrast(99%);
  margin-top: 60px;
`

export const Title = styled.h1`
  font-family: ${fonts.MainTypography};
  font-size: 1.6rem;
  color: ${colors.Color1};
  opacity: .7;
  margin-top: 20px;

  @media screen and (max-width: 425px) {
    font-size: 1.4rem;
	}
`

export const Paragraph = styled.p`
  font-family: ${fonts.MainTypography};
  font-size: 1.4rem;
  color: ${colors.Color1};
  opacity: .7;
  margin-top: 10px;

  @media screen and (max-width: 425px) {
    font-size: 1.2rem;
    display: none;
	}
`