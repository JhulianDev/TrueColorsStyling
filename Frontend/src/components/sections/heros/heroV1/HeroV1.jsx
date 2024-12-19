import { Link } from 'react-router-dom'
import PORTADA_IMG from '../../../../assets/images/home/portada_image.png'
import MARIPOSA_ICON from '../../../../assets/images/home/mariposa_icon.png'

const HeroV1 = () => {
	return (
		<section className='section-top bg-brownLight-100'>
			<div className='max-width'>
				<div className='w-[55%] tablet:w-full tablet:order-2'>
					<img src={MARIPOSA_ICON} alt='Icono mariposa' className='w-20 opacity-40 -mt-20 laptop:mt-0 laptop:w-16 tablet:hidden' />
					<h1 className='text-7xl font-bold text-greenIntense-100 laptop:text-6xl tablet:text-5xl tablet:mt-6 mobile:text-5xl'>Descubre Tu Estilo</h1>
					<h2 className='text-2xl font-bold uppercase text-greenIntense-100 laptop:text-xl'>Eleva tu imagen y fortalece tu confianza</h2>
					<p className='text-2xl text-grayIntense-100 mt-1'>Te ayudo a descubrir <b className='text-greenIntense-100'>tu esencia</b> y resaltar <b className='text-greenIntense-100'>tu belleza interior</b> a través de lo que expresas y comunicas con <b className='text-greenIntense-100'>tu estilo exterior.</b></p>
					<div className='flex gap-6 mt-3 mobile:flex-col mobile:gap-2'>
						<Link className='bg-greenIntense-200 text-white text-center px-6 py-2 border-2 border-greenIntense-200 rounded-md text-xl font-semibold hover:bg-greenIntense-100 hover:border-greenIntense-100 transition-colors'>Ver Servicios</Link>
						<Link className='text-greenIntense-100 text-center px-6 py-2 border-2 border-greenIntense-100 rounded-md text-xl font-semibold hover:bg-greenIntense-100 hover:border-greenIntense-100 hover:text-gree transition-colors hover:text-white'>Agendar Cita</Link>
					</div>
				</div>

				<div className='w-[45%] laptop:w-[38%] tablet:w-full tablet:order-1'>
					<img src={PORTADA_IMG} alt='Paullete Berg - Fundadora' className='w-full' />
				</div>
			</div>
		</section>
	)
}

export default HeroV1
