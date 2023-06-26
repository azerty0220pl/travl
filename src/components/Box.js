import { styled } from "styled-components";

export const Box = styled.div`
    position: relative;
    border-radius: ${props => props.radius || "0.75rem"};
    background-color: ${props => props.color || "white"};
    border: ${props => props.border || "none"};
    padding: ${props => props.padding || "2rem"};
    margin: auto;
`;

export const BoxAbsolute = styled(Box)`
    position: absolute;
    width: 50%;
    height: 50%;
    top: 0;
    right: 0;
`;

export const Entry = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: ${props => props.justify || "start"};
    align-items: center;
`;