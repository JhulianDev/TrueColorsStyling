import ABOUTME_IMG from '../../../../assets/images/home/presentacion_image.png'

const AboutMeV1 = () => {
  return (
    <section className="section">
      <div className="max-width">

        <div className='w-[60%] tablet:w-full tablet:order-2'>
          <h2 className='text-5xl font-bold text-brownIntense-300 tablet:mt-6'>Sobre mí</h2>
          <div className='bg-grayIntense-100 bg-opacity-10 p-6 mt-5 flex flex-col'>
            <p className='text-xl text-justify'>
              Soy Psicóloga de la Pontificia Universidad Católica de Chile, con un Master en Administración y Finanzas en la University of Science and Technology en Hong Kong sumado a más de 20 años de sólida experiencia en el mundo de la moda en retail.
              <br />
              <br />
              (Academy of Professional Image) en Melbourne, Australia y a su vez también decidí especializarme como Coach de Imagen del Método Diosor con Vicky Zorrilla de Uruguay.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim suscipit lobortis nisl
            </p>
            <span className='text-3xl text-end font-serif text-brownIntense-200'>Paullete Berg</span>
          </div>
        </div>

        <div className='relative w-[40%] ml-20 tablet:w-full tablet:ml-0 tablet:order-1'>
          <img src={ABOUTME_IMG} alt="Paullete Berg" className='relative z-10 w-full scale-95 border border-grayIntense-100' />
          <span className='bg-brownIntense-300 absolute w-48 h-56 -top-0 -right-0' />
          <span className='bg-brownIntense-300 absolute w-48 h-56 -bottom-0 -left-0' />
        </div>

      </div>
    </section>
  );
};

export default AboutMeV1;