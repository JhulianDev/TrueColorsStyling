import ASESORIA_IMAGE from "../../../../assets/images/home/asesoria_image.jpg";
import COLORIMETRIA_IMAGE from "../../../../assets/images/home/colorimetria_image.png";
import PERSONAL_SHOPPING_IMAGE from "../../../../assets/images/home/personal-shopping_image.png";
import CardServiceV1 from "./cards/CardServiceV1";

const ServicesV1 = () => {
  return (
    <section className="section bg-brownMedium-100">
      <div className="max-width flex-col">
        <h1 className="text-5xl text-center font-bold text-brownIntense-100 mb-10 tablet:mb-6 tablet:text-4xl">Nuestros Servicios</h1>
        <div className="w-full grid grid-cols-2 grid-rows-4 gap-6 largeMobile:grid-cols-1 largeMobile:grid-rows-none">
          <CardServiceV1 style="A" image={ASESORIA_IMAGE} service="Coaching de imagen" />
          <CardServiceV1 style="B" image={PERSONAL_SHOPPING_IMAGE} service="Personal Shopping" />
          <CardServiceV1 style="B" image={COLORIMETRIA_IMAGE} service="Colorimetría" />
          <CardServiceV1 style="B" image={PERSONAL_SHOPPING_IMAGE} service="Closet Ya" />
          <CardServiceV1 style="A" image={ASESORIA_IMAGE} service="Método Ilumina tu Imagen Plena y Total" />
          <CardServiceV1 style="B" image={COLORIMETRIA_IMAGE} service="Detox de Closet" />
        </div>
      </div>
    </section>
  );
};

export default ServicesV1;