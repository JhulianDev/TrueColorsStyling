import HeaderV1 from '../../sections/headers/headerV1/HeaderV1'
import { Title } from './Error404Styles'
import { Section } from '../../../assets/styles/GeneralStyles'

const Error404 = () => {
	return (
		<>
			<HeaderV1 />
			<Section $sectionTop $bgColor='#303030'>
				<Title>Error 404</Title>
			</Section>
		</>
	)
}

export default Error404
