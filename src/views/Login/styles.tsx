import styled from "styled-components";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

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

export const MainText = styled.h1`
  font-size: 1rem;
  text-align: center;
  color: var(--login-main-text);
`;

export const DescriptionText = styled.span`
  text-align: center;
  display: block;
  color: var(--login-description-text);
  font-size: 0.875rem;
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

export const SignupRowLink = styled(Link)`
  font-size: 0.875rem;
  position: relative;

  &:after {
    content: " ";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
