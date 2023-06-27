import { styled } from "styled-components";

export const Box = styled.div`
    position: relative;
    border-radius: ${props => props.radius || "0.75rem"};
    background-color: ${props => props.color || "white"};
    border: ${props => props.border || "none"};
    padding: ${props => props.padding || "2rem"};
    margin: ${props => props.margin || "0"};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
`;

export const BoxAbsolute = styled(Box)`
    position: absolute;
    width: 50%;
    height: 50%;
    top: 0;
    right: 0;
    border-radius: ${props => props.radius || "0.25rem"};
    padding: ${props => props.padding || "0.25rem 0rem"};
`;

export const Entry = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: ${props => props.justify || "start"};
    align-items: center;
    padding: ${props => props.padding || "1rem 2rem"};
`;

export const Icon = styled(Box)`
    display: block;
    padding: ${props => props.padding || "0.5rem"};
    border-radius: ${props => props.radius || "0.5rem"};
    width: ${props => props.dim || '2rem'};
    height: ${props => props.dim || '2rem'};
    margin: ${props => props.margin || "0"};
`; 