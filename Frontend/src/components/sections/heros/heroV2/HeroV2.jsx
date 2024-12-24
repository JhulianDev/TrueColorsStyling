import { Link } from 'react-router-dom';
import PORTADA_IMG from '../../../../assets/images/coaching_de_imagen/portada_image.png'

const HeroV2 = () => {
  return (
    <section className="section-top bg-brownLight-100">
      <div className="max-width">
        <div className='w-[45%] laptop:w-[35%] tablet:w-full'>
          <img src={PORTADA_IMG} alt='Paullete Berg - Fundadora' className='w-full' />
        </div>

        <div className='w-[65%] flex flex-col tablet:w-full text-center tablet:text-left'>
          <h1 className='text-6xl font-bold text-grayIntense-100 mobile:text-5xl'>Coaching de imagen</h1>
          <h2 className='text-[1.1rem] font-extrabold mt-2 text-grayIntense-300'>MÉTODO ILUMINA TU IMAGEN: 4 PASOS PARA UNA IMAGEN PLENA Y TOTAL</h2>
          <p className='text-xl'>Encuentra un estilo que realmente te represente y refleje lo mejor de ti</p>
          <Link className='bg-grayIntense-100 text-xl text-white text-center px-6 py-2 mt-3 rounded-md font-semibold hover:bg-white hover:text-grayIntense-100 hover:border-greenIntense-100 transition-colors mx-auto tablet:mx-0'>Agendar Cita</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;