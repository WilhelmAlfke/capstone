import styled, { css } from "styled-components";

export default function Header({ headerTitle, variant }) {
  return (
    <StyledHeader variant={variant}>
      <h1>{headerTitle} </h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8%;

  ${({ variant }) =>
    variant === "homepage" &&
    css`
      background-color: darkgray;
    `}

  ${({ variant }) =>
    variant === "detailpage" &&
    css`
      background-color: hotpink;
    `}
`;
