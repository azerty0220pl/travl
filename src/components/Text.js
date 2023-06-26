import { styled } from "styled-components";

const Text = styled.p`
    color: ${props => props.color || "black"};
    text-align: ${props => props.align || "start"};
    font-size: ${props => props.color || "1rem"};
    font-weight: ${props => props.weight || "400"};
`;

export default Text;