import styled from "styled-components";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();
  console.log(pathname);

  if (!pathname.startsWith("/movies"))
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
