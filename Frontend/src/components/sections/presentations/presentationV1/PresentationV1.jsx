import PRESENTACION_IMG from '../../../../assets/images/home/presentacion_image.png'

const PresentationV1 = () => {
  return (
    <section className="section">
      <div className="max-width">
        <div className='flex gap-12 tablet:flex-col tablet:gap-6'>
          <div className='w-[40%] tablet:w-full border border-grayIntense-100'>
            <img src={PRESENTACION_IMG} alt='Paullete Berg - Fundadora' className='w-full' />
          </div>

          <div className='w-[60%] text-grayIntense-100 flex flex-col justify-center text-justify tablet:w-full'>
            <p className='text-3xl font-medium break-words hyphens-auto laptop:text-2xl'>Sabemos que encontrar <b className='text-greenIntense-100'>un estilo que refleje tu verdadera esencia y te haga sentir segura</b> puede ser un desafío. Es común sentirse abrumada por las opciones y desanimada cuando la ropa en tu closet no te representa.</p>
            <h2 className='text-greenIntense-100 text-2xl uppercase mt-5 font-extrabold break-words hyphens-auto laptop:text-xl'>Por eso en true colors styling:</h2>
            <p className='text-2xl mt-3 break-words hyphens-auto laptop:text-xl'>Te ayudamos a <b>superar esas barreras</b>, guiándote y acompañándote en cada paso para descubrir los colores y estilos que <b>mejor te quedan</b>.</p>
            <hr class="border-t border-grayIntense-100 mt-6 mb-5" />
            <p className='text-2xl break-words hyphens-auto laptop:text-xl'>Junt@s, trabajamos y creamos un estilo que no solo te encante, sino que también <b>fortalezca tu confianza y te haga sentir auténtic@</b> en cualquier situación.</p>
            <hr class="border-t border-grayIntense-100 mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationV1;