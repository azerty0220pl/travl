import Text from "./Text";
import { styled } from "styled-components";

interface Props {
    $margin?: string
}

const Select = styled(Text)<Props>`
    background-color: white;
    margin: ${props => props.$margin || "0"};
    border: 2px solid #135846;
    width: auto;
    border-radius: 0.75rem;
    height: 3rem;
    padding: 0 1rem;
    &:focus {
        outline: none;
    }
`;

export default Select;