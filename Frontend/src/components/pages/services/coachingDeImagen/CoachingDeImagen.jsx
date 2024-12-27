import { data } from "../../../../content/coachingData";
import BenefitsV1 from "../../../sections/benefits/benefitsV1/BenefitsV1";
import HeroV2 from "../../../sections/heros/heroV2/HeroV2";
import PresentationV1 from "../../../sections/presentations/presentationV1/PresentationV1";
import StepsV1 from "../../../sections/steps/stepsV1/StepsV1";

const CoachingDeImagen = () => {
  return (
    <>
      <HeroV2 />
      <PresentationV1 data={data.presentation} />
      <BenefitsV1 data={data.benefits} />
      <StepsV1 data={data.steps} />
    </>
  );
};

export default CoachingDeImagen;