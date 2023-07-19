import Flex from "@/utils/flex";
import { styled } from "styled-components";

const HeaderWrapper = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #424242;
`;

const Header = styled.div`
  ${Flex.spaceBetween}
`;

const HeaderNavbar = styled.ul`
  ${Flex.justFlex}
  column-gap: 15px;
`;


const HeaderLink = styled.a`
  color: white;
  font-size: 19px;
  font-weight: 400;
  line-height: 24.74px;
`;

export { HeaderWrapper, HeaderLink, HeaderNavbar, Header };