import styled, { css } from "styled-components";

export default function Header({ headerTitle, variant }) {
  return (
    <>
      <HeaderContainer variant={variant}>
        <StyledHeader variant={variant}></StyledHeader>
        <h1>{headerTitle} </h1>
      </HeaderContainer>
    </>
  );
}

const StyledHeader = styled.header`
  /* position: relative; */
  /* top: 0; */
  width: 90%;
  height: 60px;
  margin-left: -50px;
  transform: skew(45deg);
  -moz-transform: skew(20deg);
  -o-transform: skew(20deg);

  overflow: hidden;

  ${(({ variant }) => variant === "homepage",
  "faves" &&
    css`
      background-color: #475e76;
    `)}

  ${({ variant }) =>
    variant === "detailpage" &&
    css`
      background-color: #ece6d3;
    `}
`;

const HeaderContainer = styled.div`
  background-color: #ece6d3;
  width: 100%;
  height: 60px;
  /* border-bottom: solid; */
  border-color: #475e76;

  ${(({ variant }) => variant === "homepage",
  "faves" &&
    css`
      background-color: #ece6d3;
    `)}

  ${({ variant }) =>
    variant === "detailpage" &&
    css`
      background-color: #7aa2cb;
    `}
`;
