import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <StyledDiv></StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 25px;
  background-color: var(--primary-color);
`;
