import LOGO_VARIANTE_A from '../../../../assets/images/general/logotipo_variante_a.svg';
import SHADOW from '../../../../assets/images/general/shadow_V1.webp';

const NewsletterV1 = ({ bgColor }) => {
  return (
    <section className={`section ${bgColor}`}>
      <div className='max-width'>
        <div className='relative bg-greenMedium-100 w-full flex p-14 gap-14 rounded-md overflow-hidden tablet:p-8 tablet:gap-8 largeMobile:flex-col largeMobile:items-center'>
          <img src={SHADOW} alt='Sombra decorativa' className='absolute inset-0 h-full opacity-40' />
          <div className='w-[25%] flex items-center justify-center largeMobile:w-[100%]'>
            <img src={LOGO_VARIANTE_A} alt='Variante de logo' className='w-[100%] filter-white' />
          </div>

          <div className='w-[75%] flex flex-col justify-center gap-3 tablet:gap-2 largeMobile:w-full pr-14 laptop:p-0'>
            <h2 className='text-5xl text-white font-bold tablet:text-3xl largeMobile:text-justify'><span className='text-greenIntense-100'>Tu imagen ideal</span> está a solo un email de distancia</h2>
            <p className='text-2xl text-white font-semibold tablet:text-xl largeMobile:text-justify'><span className='text-greenIntense-100'>
              Suscríbete a mí newsletter</span> y descubre cómo <span className='text-greenIntense-100'>resaltar tu belleza</span> interior cada día.</p>
            <form className='z-10 bg-white w-fit border-4 border-white rounded-md flex largeMobile:w-full largeMobile:flex-col largeMobile:mt-1 largeMobile:bg-transparent largeMobile:border-none'>
              <input type='email' placeholder='Ingresa tu email' className='bg-transparent border-transparent p-2 text-greenIntense-100 rounded-md placeholder-greenIntense-100 placeholder-opacity-70 focus:outline-none largeMobile:bg-white largeMobile:p-3' />
              <button type='submit' className='bg-greenIntense-100 text-xl text-white rounded-md px-4 hover:bg-greenMedium-100 transition-colors largeMobile:py-2 largeMobile:mt-3'>Suscribirme</button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default NewsletterV1;