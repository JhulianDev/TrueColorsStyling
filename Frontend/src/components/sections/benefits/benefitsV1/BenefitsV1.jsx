import CHECK_ICON from '../../../../assets/images/general/check_icon.svg'

const BenefitsV1 = ({ data }) => {
  return (
    <section className="section bg-greenLight-100">
      <div className="max-width gap-16 tablet:gap-4">

        <div className='relative w-[40%] tablet:w-full'>
          <img src={data.img} alt="Paullete Berg" className='relative z-10 w-full scale-95 border border-grayIntense-100' />
          <span className='bg-greenIntense-100 absolute w-48 h-56 -top-0 -right-0' />
          <span className='bg-greenIntense-100 absolute w-48 h-56 -bottom-0 -left-0' />
        </div>

        <div className='w-[60%] tablet:w-full'>
          <h2 className='text-5xl text-center font-bold text-greenIntense-100 tablet:text-left tablet:-mb-4'>{data.title}</h2>
          <ul className='flex flex-col mt-5 gap-3 tablet:gap-0'>
            {data.items.map(item => (
              <>
                <li key={item.id} className='flex items-center gap-3 tablet:flex-col tablet:gap-0'>
                  <img src={CHECK_ICON} alt='Check Icon' className='w-6 tablet:hidden' style={{ filter: "invert(42%) sepia(52%) saturate(4579%) hue-rotate(153deg) brightness(98%) contrast(99%)" }} />
                  <p className='text-lg font-medium text-justify break-words hyphens-auto tablet:py-4'>{item.text}</p>
                  <hr className="hidden w-full border-t border-grayIntense-100 tablet:flex" />
                </li>
              </>
            ))}
          </ul>
        </div>

      </div>

    </section>
  );
};

export default BenefitsV1;