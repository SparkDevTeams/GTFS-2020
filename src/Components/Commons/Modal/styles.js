import styled from "styled-components";

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  z-index: 2;
  top: 0;
  left: 0;
  position: fixed;
  display: ${({show}) => show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.h1`
    position: absolute;
    top: 8px;
    left: 16px;
    text-align: left;
`;

export const CardDescription = styled.pre`
    font-size: medium;
    white-space: pre-line;
    text-align: center;
    font-weight: bold;
`;