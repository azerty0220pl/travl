import { styled } from "styled-components";

const Text = styled.p`
    color: ${props => props.$color || "black"};
    text-align: ${props => props.$align || "start"};
    font-size: ${props => props.$size || "1rem"};
    line-height: ${props => props.$line || props.$size || "1rem"};
    font-weight: ${props => props.$weight || "400"};
    text-decoration: none;
    width:  ${props => props.$width || "100%"};
    word-wrap: break-word;
    margin-top: ${props => props.$margin || "0"};
    white-space: ${props => props.$space || "normal"};
    font-family: Poppins;
    height: ${props => props.$height || "auto"};
    vertical-align: middle;

    &::placeholder {
        font-size: ${props => props.$size || "1rem"};
        font-family: Poppins;
    }
`;

export default Text;