import styled from "styled-components";
import Link from "next/link";

export default function Footer({ footerLink }) {
  return (
    <>
      <StyledDiv>
        <StyledLink href="/">home</StyledLink>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: var(--primary-color);
`;

const StyledLink = styled(Link)`
  position: relative;
  margin-left: 10px;
  color: #e97f7f;
`;
