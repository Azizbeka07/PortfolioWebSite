import Flex from "@/utils/flex";
import { styled } from "styled-components";

const BannerWrapper = styled.div`
  padding: 84px 0;
  display: flex;
`;

const BannerLeft = styled.div`
  ${Flex.flexBetween}
  flex-direction: column;
  row-gap: 15px;
`;

const BannerTitle = styled.h1`
  max-width: 447px;
  width: 100%;
  font-size: 61px;
  font-weight: 400;
  line-height: 79.42px;
  color: #fff;
`;

const BannerText = styled.p`
  max-width: 400px;
  width: 100%;
  color: #dddcdc;
  font-size: 15px;
  font-weight: 400;
  line-height: 19.53px;
`;

const BannerButton = styled.button`
  width: 165px;
  padding: 18px 35px;
  background-color: #db3138;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  line-height: 19.53px;
  border-radius: 4px;
`;

export { BannerWrapper, BannerTitle, BannerText, BannerLeft, BannerButton };
