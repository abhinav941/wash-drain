import { styled } from 'utils';

export const Container = styled.div<{ visible: boolean }>`
    box-shadow: 0px 10px 99px #3d608714;
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    display: ${props => (props.visible ? 'block' : 'none')};
    transform: translate(-50%, -50%);
    /* This color should be given through theme */
    background-color: #fff;
    border-radius: 20px;
    padding: 40px 50px 45px 50px;
    text-align: left;
    z-index: 10;
`;

export const Backdrop = styled.div`
    position: absolute;
    display: block;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.backdropColor};
    opacity: 0.3;
    z-index: 2;
    cursor: pointer;
    backdrop-filter: blur(10px);
`;

export const Title = styled.h2`
    font-weight: bold;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
`;

export const Description = styled.p`
    /* This color should be given through theme */
    color: #07335b;
    opacity: 0.61;
`;

export const Content = styled.div`
    padding: 20px 0;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
`;

export const CancelButtonContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
`;
