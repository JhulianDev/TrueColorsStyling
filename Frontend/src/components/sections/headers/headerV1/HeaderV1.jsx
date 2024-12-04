import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderContainer, HeaderCTA, HeaderCTAMobile, HeaderLi, HeaderLink, HeaderNav, HeaderUl, Logo, LogoContainer, Separator } from './HeaderV1Styles'
import { MaxWidth } from '../../../../assets/styles/GeneralStyles'
import LOGOTIPO from '../../../../assets/images/general/logotipo_303030.svg'
import HamburgerButton from '../../../general/buttons/hamburger/HamburgerButton'

const HeaderV1 = () => {
	const [open, setOpen] = useState(false)
	const handleNav = () => {
		setOpen(!open)
	}
	return (
		<>
			<HeaderContainer>
				<MaxWidth $header>

					<LogoContainer to="/">
						<Logo src={LOGOTIPO} alt='logotipo TrueColorsStyling' />
					</LogoContainer>

					<HamburgerButton open={open} handleNav={handleNav} />

					<HeaderNav open={open}>
						<HeaderUl>
							<HeaderLi $firstItem><HeaderLink onClick={handleNav} to="#">Inicio</HeaderLink></HeaderLi>
							<Separator>·</Separator>
							<HeaderLi><HeaderLink onClick={handleNav} to="#">Servicios</HeaderLink></HeaderLi>
							<Separator>·</Separator>
							<HeaderLi><HeaderLink onClick={handleNav} to="#">Nosotros</HeaderLink></HeaderLi>
							<Separator>·</Separator>
							<HeaderLi><HeaderLink onClick={handleNav} to="#">Contacto</HeaderLink></HeaderLi>
							<Separator>·</Separator>
							<HeaderLi><HeaderLink onClick={handleNav} to="#">Gift Card</HeaderLink></HeaderLi>
							<HeaderLi $mobile $lastItem><HeaderCTAMobile onClick={handleNav} to="#">Agendar llamada</HeaderCTAMobile></HeaderLi>
						</HeaderUl>
					</HeaderNav>

					<HeaderCTA to="#">Agendar llamada</HeaderCTA>

				</MaxWidth>
			</HeaderContainer>
			<Outlet />
		</>
	)
}

export default HeaderV1
