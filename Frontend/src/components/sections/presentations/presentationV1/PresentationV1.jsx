const PresentationV1 = ({ data }) => {
  return (
    <section className="section">
      <div className="max-width">
        <div className='flex gap-12 tablet:flex-col tablet:gap-6'>
          <div className={`w-[40%] h-fit tablet:w-full ${data.border ? 'border border-grayIntense-100' : ''} ${data.imageFirst ? 'order-1' : 'order-2 tablet:order-1'}`}>
            <img src={data.img} alt={data.alt} className='w-full' />
          </div>

          <div className={`w-[60%] text-grayIntense-100 flex flex-col justify-center text-justify tablet:w-full ${data.imageFirst ? 'order-2' : 'order-1 tablet:order-2'}`}>
            <p className='text-3xl font-medium break-words hyphens-auto laptop:text-2xl'>{data.paragraph1}</p>
            <h2 className='text-greenIntense-100 text-2xl uppercase mt-5 font-extrabold break-words hyphens-auto laptop:text-xl'>{data.subtitle}</h2>
            <p className='text-2xl mt-3 break-words hyphens-auto laptop:text-xl'>{data.paragraph2}</p>
            <hr className="border-t border-grayIntense-100 mt-6 mb-5" />
            <p className='text-2xl break-words hyphens-auto laptop:text-xl'>{data.paragraph3}</p>
            <hr className="border-t border-grayIntense-100 mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationV1;