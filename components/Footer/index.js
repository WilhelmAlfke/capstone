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
          color={pathname === "/" ? "var(fifth-color" : "var(primary-color"}
        />
      </NavLink>

      <NavLink href={"/"} aria-label="Navigate to landing page">
        <Svg
          variant="home"
          color={
            pathname === "/faves" ? "var(fifth-color)" : "var(--primary-color)"
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
const NavLink = styled(Link)`
  /* display: flex;
  position: absolute;
  margin-left: 170px;
  margin-top: 6px; */
  /* color: #e97f7f; */
`;

const StyledSvg = styled(Svg)``;
