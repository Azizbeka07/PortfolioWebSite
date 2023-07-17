import { css } from "styled-components";

const justFlex = css`
    display: flex;
`;

const alignCenter = css`
    display: flex;
    align-items: center;
`;

const spaceBetween = css`
    ${alignCenter};
    justify-content: space-between;
`;

const center = css`
    ${alignCenter};
    justify-content: center;
`;
const flexBetween = css`
    display: flex;
    justify-content: space-between;
`;
const Flex = { alignCenter, spaceBetween, center, justFlex, flexBetween };

export default Flex;
