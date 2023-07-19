import Head from "next/head";
import React from "react";
import { Container } from "../Container";
import * as S from "./style";

const Banner = () => {
  return (
    <S.BannerWrapper>
      <Container>
        <S.BannerLeft>
          <S.BannerTitle>I'm a Web Programmer</S.BannerTitle>
          <S.BannerText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            recusandae repellendus illum minima optio esse deserunt cum alias
            nulla autem ratione obcaecati veritatis tenetur nobis,
            exercitationem omnis culpa dignissimos repellat?
          </S.BannerText>
          <S.BannerButton>Learn More</S.BannerButton>
        </S.BannerLeft>
      </Container>
    </S.BannerWrapper>
  );
};

export default Banner;
