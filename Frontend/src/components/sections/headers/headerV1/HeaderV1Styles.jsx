import styled, { css } from 'styled-components'
import { colors } from '../../../../assets/styles/ColorPalette'
import { Link } from 'react-router-dom'
import { fonts } from '../../../../assets/styles/FontsHandler'

export const HeaderContainer = styled.header`
	background-color: ${colors.Color2};
	width: 100%;
	height: 60px;
	padding: 0px 60px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: ${fonts.MainTypography};
	font-weight: 500;

	@media screen and (max-width: 768px) {
		padding: 0 30px;
	}

	@media screen and (max-width: 425px) {
		padding: 0 20px;
	}
`

export const LogoContainer = styled(Link)`
  display: flex;
`

export const Logo = styled.img`
	height: 25px;
	transition: all 0.2s ease;

	&:hover{
		transform: scale(1.05);
  }

	@media screen and (max-width: 1240px) {
		height: 22px;
	}
`

export const HeaderNav = styled.nav`
	background-color: #87d1d2e6;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 1024px) {
		position: absolute;
		width: 0;
    left: 0px;
    right: 0px;
    top: 60px;
		opacity: 0;
		height: calc(100% - 60px);
		overflow: hidden;
		align-items: flex-start;
		transition: all 0.5s ease;
		${props => props.open && css`
      height: calc(100vh - 60px);
      width: 100vw;
      opacity: 1;
    `}
	}
`

export const HeaderUl = styled.ul`
	width: 100%;
	height: fit-content;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;

	@media screen and (max-width: 1024px) {
		flex-direction: column;
		gap: 0px;
	}
`

export const HeaderLi = styled.li`
	display: ${(props) => (props.$mobile ? 'none' : 'flex')};

	@media screen and (max-width: 1024px) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		border-top: ${(props) => (props.$firstItem ? `2px solid ${colors.textColor}` : 'none')};
		border-bottom: ${(props) => (props.$lastItem ? 'none' : `1px solid ${colors.textColor}`)};
	}
`

export const HeaderLink = styled(Link)`
	color: ${colors.textColor};
	font-size: 1.2rem;
	transition: all 0.2s ease;

	&:hover{
		transform: scale(1.1);
		font-weight: 600;
  }

	@media screen and (max-width: 1024px){
		width: 100%;
    padding: 30px 0;
		border-top: ${(props) => (props.$firstItem ? `1px solid ${colors.textColor}` : 'none')};
		font-size: 1.5rem;
		white-space: nowrap;
  }
`

export const Separator = styled.span`
	font-size: 1.2rem;

	@media screen and (max-width: 1024px) {
		display: none;
	}
`

export const HeaderCTA = styled(Link)`
	background-color: ${colors.textColor};
	color: white;
	padding: 10px 20px;
	border-radius: 7px;
	transition: all 0.2s ease;

	&:hover{
		background-color: ${colors.Color7};
		color: ${colors.textColor};
  }

	@media screen and (max-width: 1024px) {
		display: none;
	}
`

export const HeaderCTAMobile = styled(Link)`
	background-color: ${colors.textColor};
	color: white;
	width: 85%;
	padding: 15px 30px;
	border-radius: 7px;
	font-size: 1.7rem;
	margin-top: 30px;
	white-space: nowrap;
	transition: all 0.2s ease;

	&:hover{
		background-color: ${colors.Color7};
		color: ${colors.textColor};
  }

	@media screen and (max-width: 425px){
		font-size: 1.5rem;
  }
`
