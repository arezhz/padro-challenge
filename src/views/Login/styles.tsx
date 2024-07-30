import styled from "styled-components";

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
