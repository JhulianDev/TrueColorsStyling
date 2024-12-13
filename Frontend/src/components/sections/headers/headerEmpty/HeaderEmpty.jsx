import { HeaderContainer } from "./HeaderEmptyStyles";
import { Outlet } from "react-router-dom";

const HeaderEmpty = () => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <Outlet />
    </>
  );
};

export default HeaderEmpty;