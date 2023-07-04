import { styled } from "styled-components";

export const Box = styled.div`
    position: relative;
    display: ${props => props.display || "block"};
    border-radius: ${props => props.radius || "0.75rem"};
    background-color: ${props => props.color || "white"};
    border: ${props => props.border || "none"};
    padding: ${props => props.padding || "2rem"};
    margin: ${props => props.margin || "0"};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    object-fit: cover;
    overflow: hidden;
    vertical-align: middle;
    z-index: ${props => props.zIndex || 'auto'};
`;

export const BoxAbsolute = styled(Box)`
    position: absolute;
    top: ${props => props.top || 'unset'};
    bottom: ${props => props.bottom || 'unset'};
    left: ${props => props.left || 'unset'};
    right: ${props => props.right || 'unset'};
    border-radius: ${props => props.radius || "0.25rem"};
    padding: ${props => props.padding || "0.25rem 0rem"};
    z-index: 10;
`;

export const Entry = styled(Box)`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    gap: ${props => props.gap || '1rem'};
    justify-content: ${props => props.justify || "start"};
    align-items: ${props => props.align || "center"};
    padding: ${props => props.padding || "1rem 2rem"};
    flex-wrap: ${props => props.wrap || "unset"};
`;

export const Icon = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props => props.padding || "0.5rem"};
    border-radius: ${props => props.radius || "0.5rem"};
    width: ${props => props.dim || '2rem'};
    height: ${props => props.dim || '2rem'};
    margin: ${props => props.margin || "0"};
`; 