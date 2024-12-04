import styled from 'styled-components'
import { colors } from '../../../../assets/styles/ColorPalette'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
	background-color: ${colors.Color2};
	width: 100%;
	height: 60px;
	padding: 0px 60px;

	display: flex;
	justify-content: center;
	align-items: center;

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
`
