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

//TODO FULTON NEED HELP WITH THIS: align to top left of modal
export const CardTitle = styled.h1`
    position: inherit;
    top: 8px;
    left: auto;
    text-align: left
`;

export const CardDescription = styled.pre`
    font-size: medium;
    white-space: pre-line;
    text-align: center;
    font-weight: bold;
`;

export const ModalText = styled.p`
 font-family: Montserrat;
 font-style: normal;
 font-weight: normal;
 font-size: 18px;
 line-height: 22px;
 text-align: center;
 white-space: pre-line;
 width: 300px;

 `;
