import styled from "styled-components";
import Svg from "../Svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <StyledFooter>
      <Link href={"/"} aria-label="Navigate to landing page">
        <Svg
          variant="home"
          color={
            pathname === "/" ? "var(--fifth-color)" : "var(--fourth-color)"
          }
        />
      </Link>
      <Link href={"/faves"} aria-label="Navigate to favorites page">
        <Svg
          variant="faves"
          color={
            pathname === "/" ? "var(--fourth-color)" : "var(--fifth-color)"
          }
        />
      </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--primary-color);
`;
