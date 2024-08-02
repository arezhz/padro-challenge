import { Link } from "react-router-dom";
import styled from "styled-components";

export const TextBox = styled.span<{ $size?: string; $color: string }>`
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$size};
`;

export const LinkNavigate = styled(Link)`
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
