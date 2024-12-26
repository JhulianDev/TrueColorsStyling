import { data } from "../../../../content/coachingData";
import HeroV2 from "../../../sections/heros/heroV2/HeroV2";
import PresentationV1 from "../../../sections/presentations/presentationV1/PresentationV1";

const CoachingDeImagen = () => {
  return (
    <>
      <HeroV2 />
      <PresentationV1 data={data.presentation} />
    </>
  );
};

export default CoachingDeImagen;