import React from "react";
import { Container } from "../Container";
import * as S from "./style";

// header images
import Logo from "@/assets/Images/Logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Container>
        <S.Header>
        <Image src={Logo} alt="img" />
        <S.HeaderNavbar>
          <S.HeaderLink href="/" >Home</S.HeaderLink>
          <S.HeaderLink href="/About" >AboutMe</S.HeaderLink>
          <S.HeaderLink href="/Portfolio" >Portfolio</S.HeaderLink>
        </S.HeaderNavbar>
        </S.Header>
      </Container>
    </S.HeaderWrapper>
  );
};

export default Header;
