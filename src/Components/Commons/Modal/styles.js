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
    text-align: left;
`;