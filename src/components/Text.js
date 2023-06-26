import { styled } from "styled-components";

const Text = styled.p`
    color: ${props => props.color || "black"};
    text-align: ${props => props.align || "start"};
    font-size: ${props => props.size || "1rem"};
    font-weight: ${props => props.weight || "400"};
    text-decoration: none;
    width: 100%;
    word-wrap: break-word;
`;

export default Text;