import { LoginLayout, LoginLogo, LoginWrapper } from "./styles";
import { Outlet } from "react-router-dom";
import MainLogo from "../../assets/images/logo.svg";

export default function Login() {
  return (
    <LoginLayout>
      <LoginWrapper>
        <LoginLogo>
          <img src={MainLogo} alt="logo" />
        </LoginLogo>
        <Outlet />
      </LoginWrapper>
    </LoginLayout>
  );
}
