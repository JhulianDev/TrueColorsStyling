import { data } from '../../../content/homeData'
import AboutMeV1 from '../../sections/aboutMe/aboutMeV1/AboutMeV1'
import FooterV1 from '../../sections/footers/footerV1/FooterV1'
import HeroV1 from '../../sections/heros/heroV1/HeroV1'
import NewsletterV1 from '../../sections/newsletters/newsletterV1/NewsletterV1'
import PresentationV1 from '../../sections/presentations/presentationV1/PresentationV1'
import ServicesV1 from '../../sections/services/servicesV1/ServicesV1'

const Home = () => {
	return (
		<>
			<HeroV1 />
			<PresentationV1 data={data.presentation} />
			<ServicesV1 />
			<AboutMeV1 />
			<NewsletterV1 data={data.newsletter} />
			<FooterV1 />
		</>
	)
}

export default Home
