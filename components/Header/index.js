import styled, { css } from "styled-components";

export default function Header({ headerTitle, variant }) {
  return (
    <StyledHeader variant={variant}>
      <HeaderContainer variant={variant}>
        <h1>{headerTitle} </h1>
      </HeaderContainer>
    </StyledHeader>
  );
}

const HeaderContainer = styled.div`
  width: 90%;
  height: 60px;
  margin-left: -50px;
  transform: skew(45deg);

  ${(({ variant }) => variant === "homepage",
  "faves" &&
    css`
      background-color: var(--secondary-color);
    `)}

  ${({ variant }) =>
    variant === "detailpage" &&
    css`
      background-color: var(--secondary-color);
    `}
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;

  ${(({ variant }) => variant === "homepage",
  "faves" &&
    css`
      background-color: #e97f7f;
    `)}

  ${({ variant }) =>
    variant === "detailpage" &&
    css`
      background-color: var(--fourth-color);
    `}
`;
