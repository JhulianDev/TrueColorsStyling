const StepsV1 = ({ data }) => {
  return (
    <section className="section ">
      <div className="max-width flex flex-col">
        <h2 className='w-full text-5xl font-bold text-greenMedium-100 text-center tablet:text-left tablet:-mt-3'>{data.title}</h2>
        <div className="w-full grid grid-cols-[60%_40%] grid-rows-2 mt-10 tablet:mt-6 largeMobile:grid-cols-1 largeMobile:grid-rows-none largeMobile:gap-5">

          <div className="bg-greenMedium-100 flex justify-center items-center p-10 shadow-lg rounded-md overflow-hidden mb-10 tablet:mb-5 largeMobile:mb-0 largeMobile:p-8 largeMobile:order-2">
            <p className='text-2xl font-medium text-white text-justify tablet:text-xl'>{data.paragraph1}</p>
          </div>

          <div className="relative bg-greenMedium-100 row-span-2 flex items-center justify-center p-8 shadow-lg rounded-md overflow-hidden ml-10 tablet:ml-5 largeMobile:ml-0 largeMobile:order-1">
            <div className="absolute inset-0 bg-center bg-cover blur-sm opacity-40" style={{ backgroundImage: `url(${data.img})` }} />
            <img src={data.img} alt="Paulette Berg - Fundadora" className="relative border-2 border-white z-10" />
          </div>

          <div className="bg-greenMedium-100 flex justify-center items-center p-10 shadow-lg rounded-md overflow-hidden largeMobile:p-8 largeMobile:order-3">
            <p className='text-2xl font-medium text-white text-justify tablet:text-xl'>{data.paragraph2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsV1;