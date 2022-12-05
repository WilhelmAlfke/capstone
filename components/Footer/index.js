import styled from "styled-components";
import Svg from "../Svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <StyledFooter>
      <NavLink href={"/faves"} aria-label="Navigate to favorites page">
        <Svg
          variant="faves"
          color={
            pathname === "/"
              ? "var(--fifth-color"
              : pathname !== "/" || pathname !== "/faves"
              ? "var(--fifth-color"
              : "var(--primary-color"
          }
        />
      </NavLink>

      <NavLink href={"/"} aria-label="Navigate to landing page">
        <Svg
          variant="home"
          color={
            pathname === "/"
              ? "var(--primary-color)"
              : pathname !== "/" || pathname !== "/faves"
              ? "var(--fifth-color)"
              : "var(--fifth-color)"
          }
        />
      </NavLink>
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
  z-index: 0;
`;
const NavLink = styled(Link)``;

const StyledSvg = styled(Svg)``;
