import { Link } from 'react-router-dom';
import LOGO_VARIANTE_A from '../../../../assets/images/general/logotipo_variante_a.svg';
import SHADOW from '../../../../assets/images/general/shadow_V1.webp';

const NewsletterV1 = ({ data }) => {
  return (
    <section className={`section ${data.bgColor}`}>
      <div className='max-width'>
        <div className='relative bg-greenMedium-100 w-full flex p-14 gap-14 rounded-md overflow-hidden tablet:p-8 tablet:gap-8 largeMobile:flex-col largeMobile:items-center'>
          <img src={SHADOW} alt='Sombra decorativa' className='absolute inset-0 h-full opacity-40' />
          <div className='w-[25%] flex items-center justify-center largeMobile:w-[100%]'>
            <img src={LOGO_VARIANTE_A} alt='Variante de logo' className='w-[100%] filter-white' />
          </div>

          <div className='w-[75%] flex flex-col justify-center gap-3 tablet:gap-2 largeMobile:w-full pr-14 laptop:p-0'>
            <h2 className='text-5xl text-white font-bold tablet:text-3xl largeMobile:text-justify'>{data.title}</h2>
            <p className='text-2xl text-white font-semibold tablet:text-xl largeMobile:text-justify'>{data.paragraph}</p>
            {data.typeNewsletter === true && (
              <form className='z-10 bg-white w-fit border-4 border-white rounded-md flex largeMobile:w-full largeMobile:flex-col largeMobile:mt-1 largeMobile:bg-transparent largeMobile:border-none'>
                <input type='email' placeholder='Ingresa tu email' className='bg-transparent border-transparent p-2 text-greenIntense-100 rounded-md placeholder-greenIntense-100 placeholder-opacity-70 focus:outline-none largeMobile:bg-white largeMobile:p-3' />
                <button type='submit' className='bg-greenIntense-100 text-xl text-white rounded-md px-4 hover:bg-greenMedium-100 transition-colors largeMobile:py-2 largeMobile:mt-3'>Suscribirme</button>
              </form>
            )}

            {data.typeCTA === true && (
              <Link to={data.url} className='z-10 text-2xl font-semibold text-greenIntense-100 text-center bg-white px-6 py-2 rounded-md w-fit hover:bg-greenIntense-100 hover:text-white transition-colors'>Contactar</Link>
            )}
          </div>
        </div>
      </div>

    </section>
  );
};

export default NewsletterV1;