import { colors } from "../../../assets/styles/ColorPalette";
import { MaxWidth, Section } from "../../../assets/styles/GeneralStyles";
import { Logo, Paragraph, Shadow, Title } from "./ConstructionPageStyles";
import IMAGOTIPO from "../../../assets/images/general/imagotipo.svg"
import LOGOTIPO from "../../../assets/images/general/logotipo.svg"
import SHADOW from "../../../assets/images/general/shadow_V1.webp"
import CtaV1 from "../../general/buttons/ctaV1/CtaV1";

const ConstructionPage = () => {
  return (
    <Section $bgColor={colors.Color7}>
      <Shadow src={SHADOW} alt="Shadow" />
      <MaxWidth $flexDirection="column">
        <Logo src={LOGOTIPO} alt="Imagotipo True Colors Styling" />
        <Title>Estamos construyendo nuestro sitio web para ofrecerte una mejor experiencia</Title>
        <Paragraph>Vuelve pronto para descubrir todas las novedades</Paragraph>
        <CtaV1
          ctaText="Visítanos en Instagram"
          bgColor={colors.Color1}
          bgColorHover={colors.Color2}
          color={colors.Color7}
          marginTop="20px"
          url="https://www.instagram.com/true.colors.styling/"
        />
      </MaxWidth>
    </Section>
  );
};

export default ConstructionPage;