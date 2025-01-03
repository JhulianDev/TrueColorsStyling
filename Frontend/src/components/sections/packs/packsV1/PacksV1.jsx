import { Link } from 'react-router-dom';

const PacksV1 = ({ data }) => {
  return (
    <section className="section bg-brownMedium-200">
      <div className="max-width flex flex-col">
        <h2 className='text-5xl font-bold'>Asi podemos ayudarte</h2>
        <div className='flex gap-12 mt-10 laptop:gap-8 tablet:mt-8 tablet:gap-6 largeMobile:flex-col largeMobile:item-center largeMobile:justify-center'>

          {data.map((data) => (
            <div key={data.id} className='bg-brownMedium-100 flex flex-col p-8 w-1/2 shadow-lg border border-grayIntense-100 rounded-md largeMobile:w-full'>
              <h3 className='text-3xl font-bold mt-1'>{data.title}</h3>
              <span className='bg-greenMedium-100 w-fit font-semibold py-[2px] px-3 mt-1 rounded-sm'>{data.tag}</span>
              <p className='text-xl font-medium mt-2'>{data.paragraph1}</p>
              <p className='text-xl font-medium mt-2 mb-6'>{data.paragraph2}</p>
              <Link to={data.url} className='bg-greenIntense-100 text-center text-white font-bold py-2 px-4 inline-block w-full rounded-md mt-auto hover:bg-greenMedium-100'>Agendar Reunión</Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PacksV1;