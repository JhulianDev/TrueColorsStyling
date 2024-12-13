import { Button } from "./CtaV1Styles";

const CtaV1 = ({ ctaText, bgColor, color, bgColorHover, colorHover, marginTop, url }) => {
  return (
    <Button
      $bgColor={bgColor}
      $bgColorHover={bgColorHover}
      $color={color}
      $colorHover={colorHover}
      $marginTop={marginTop}
      to={url}
    >
      {ctaText}
    </Button>
  );
};

export default CtaV1;