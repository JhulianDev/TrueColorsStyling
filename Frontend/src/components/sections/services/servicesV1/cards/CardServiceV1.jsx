import { Link } from "react-router-dom";

const CardServiceV1 = ({ image, service, style }) => {
  const stylesCardA = "relative col-span-1 row-span-2 bg-cover bg-center aspect-[4/3] flex flex-col items-center justify-end rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all"
  const stylesCardB = "relative col-span-1 row-span-1 bg-cover bg-top flex flex-col items-center rounded-md overflow-hidden shadow-md hover:shadow-xl transition-all largeMobile:aspect-[4/3] largeMobile:bg-left"
  return (
    <article className={style === "A" ? stylesCardA : stylesCardB} style={{ backgroundImage: `url(${image})` }}>
      <span className="z-0 absolute inset-0 bg-grayIntense-100 bg-opacity-50" />
      <div className="z-10 relative w-full h-full flex flex-col items-center justify-center px-10">
        <h3 className="text-4xl text-white font-bold text-center laptop:text-3xl tablet:text-2xl">{service}</h3>
      </div>
      <Link to="" className="z-10 w-full bg-brownIntense-100 text-white font-bold text-center px-6 py-2 cursor-pointer hover:bg-white hover:text-grayIntense-100 transition-colors">Ver Más</Link>
    </article>
  );
};

export default CardServiceV1;