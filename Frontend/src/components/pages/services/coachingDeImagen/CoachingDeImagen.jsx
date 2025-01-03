import { data } from "../../../../content/coachingData";
import BenefitsV1 from "../../../sections/benefits/benefitsV1/BenefitsV1";
import FooterV1 from "../../../sections/footers/footerV1/FooterV1";
import HeroV2 from "../../../sections/heros/heroV2/HeroV2";
import NewsletterV1 from "../../../sections/newsletters/newsletterV1/NewsletterV1";
import PacksV1 from "../../../sections/packs/packsV1/PacksV1";
import PacksV2 from "../../../sections/packs/packsV2/PacksV2";
import PresentationV1 from "../../../sections/presentations/presentationV1/PresentationV1";
import StepsV1 from "../../../sections/steps/stepsV1/StepsV1";

const CoachingDeImagen = () => {
  return (
    <>
      <HeroV2 />
      <PresentationV1 data={data.presentation} />
      <BenefitsV1 data={data.benefits} />
      <StepsV1 data={data.steps} />
      <PacksV1 data={data.packs} />
      <PacksV2 data={data.packsIndividuals} />
      <NewsletterV1 bgColor="bg-white" />
      <FooterV1 />
    </>
  );
};

export default CoachingDeImagen;