import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderContainer, Logo, LogoContainer } from './HeaderV1Styles'
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

				</MaxWidth>
			</HeaderContainer>
			<Outlet />
		</>
	)
}

export default HeaderV1
