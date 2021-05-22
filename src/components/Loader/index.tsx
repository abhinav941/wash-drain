import { keyframes } from 'styled-components';

import { styled } from 'utils';

const waterFillingAnimations = keyframes`
    33%  {background-position:    0% 33% ,100% 33% ,200% 33% }
    66%  {background-position: -100%  66%,0%   66% ,100% 66% }
    100% {background-position:    0% 100%,100% 100%,200% 100%}

`;

export const Loader = styled.div`
    --r1: 154%;
    --r2: 68.5%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: radial-gradient(
                var(--r1) var(--r2) at top,
                #0000 79.5%,
                ${props => props.theme.loader.backgroundColor} 80%
            )
            center left,
        radial-gradient(var(--r1) var(--r2) at bottom, ${props => props.theme.loader.backgroundColor} 79.5%, #0000 80%)
            center center,
        radial-gradient(var(--r1) var(--r2) at top, #0000 79.5%, ${props => props.theme.loader.backgroundColor} 80%)
            center right,
        #ccc;
    background-size: 50.5% 220%;
    background-position: -100% 0%, 0% 0%, 100% 0%;
    background-repeat: no-repeat;
    animation: ${waterFillingAnimations} 2s infinite linear;
`;
