import styled from "styled-components";
import { Button } from "primereact/button";
import { LinkNavigate } from "../../kits/shared";
import { InputOtp } from "primereact/inputotp";

export const LoginLayout = styled.section`
  background-color: var(--login-bg);
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const LoginWrapper = styled.div`
  background-color: var(--surface-0);
  width: 375px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 1rem;
  border: var(--login-border);
  padding: 42px 1rem;
`;

export const LoginLogo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;
export const LoginTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
export const LoginFormLayout = styled.div`
  margin-top: 2rem;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1.5rem;
`;

export const SignupRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const SignupRowText = styled.span`
  color: var(--text);
  font-size: 0.875rem;
`;

export const ResendWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  margin-top: 1rem;
`;

export const ResendButton = styled.button`
  font-size: 0.875rem;
  position: relative;
  border: 0;
  cursor: pointer;
  padding: 0;
  background: var(--button-bg-gradiant-1);
  background: linear-gradient(
    90deg,
    var(--button-bg-gradiant-1) 0%,
    var(--button-bg-gradiant-2) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  &:after {
    content: " ";
    background: var(--button-bg-gradiant-1);
    background: linear-gradient(
      90deg,
      var(--button-bg-gradiant-1) 0%,
      var(--button-bg-gradiant-2) 100%
    );
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  &:disabled {
    -webkit-text-fill-color: var(--gray-400) !important;
    &:after {
      display: none;
    }
  }
`;
