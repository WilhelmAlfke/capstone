import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <p>Just Find It</p>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
  height: 8%;
  background-color: darkgray;
`;
