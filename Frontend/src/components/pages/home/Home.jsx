import AboutMeV1 from '../../sections/aboutMe/aboutMeV1/AboutMeV1'
import HeroV1 from '../../sections/heros/heroV1/HeroV1'
import PresentationV1 from '../../sections/presentations/presentationV1/presentationV1'
import ServicesV1 from '../../sections/services/servicesV1/ServicesV1'

const Home = () => {
	return (
		<>
			<HeroV1 />
			<PresentationV1 />
			<ServicesV1 />
			<AboutMeV1 />
		</>
	)
}

export default Home
