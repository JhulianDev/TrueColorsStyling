import { Link } from 'react-router-dom';

const PacksV2 = ({ data }) => {
  return (
    <section className='section bg-brownLight-100'>
      <div className='max-width flex flex-col'>
        <h2 className='text-5xl font-bold'>{data.title}</h2>
        <div className='grid grid-cols-3 gap-8 mt-10 tablet:gap-6 tablet:mt-8 largeMobile:grid-cols-1'>

          {data.packs.map((pack) => (
            <article key={pack.id} className='bg-brownMedium-100 flex flex-col p-8 border border-grayIntense-100 shadow-lg rounded-md'>
              <h3 className='text-3xl font-bold'>{pack.title}</h3>
              <span className='text-2xl text-center font-extrabold text-greenIntense-100 bg-white bg-opacity-70 p-1 mt-2'>{pack.price}</span>
              <hr className='border-t border-grayIntense-100 mt-4 mb-3' />
              <h4 className='text-lg font-bold uppercase'>¿Como lo haremos?</h4>
              <p className='text-lg font-medium text-justify break-words hyphens-auto mb-6 mt-1'>{pack.paragraph}</p>
              <Link to={pack.url} className='bg-greenIntense-100 text-center text-white font-bold py-2 px-4 inline-block w-full rounded-md mt-auto hover:bg-greenMedium-100'>Agendar Reunión</Link>
            </article>
          ))}

        </div>
      </div>

    </section>
  );
};

export default PacksV2;