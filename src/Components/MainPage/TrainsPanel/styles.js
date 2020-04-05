import styled from 'styled-components';

export const TextField = styled.input`
  width:  100%;
  height: 35px;
  border: 1px solid rgba(48, 48, 48, 0.25);
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Form = styled.form` 
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5%;
`;

export const FormContainer = styled.div`
  display: flex;
  ${({wrap}) => wrap ? 'flex-wrap: wrap' : null};
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  max-height: 400px;
  overflow: scroll;
`;

export const TextLabel = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #797979;
  margin-bottom: 5px;
`;

export const InputButton = styled.input`
  background: #E892A2;
  border-radius: 5px;
  width: 125px;
  color: #FFFFFF;
  height: 35px;
  border-width: 0;
  align-self: center;

`;

export const PageTitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
  align-self: start;
  margin-bottom: 25px;
`;

export const Text = styled.p`
 font-family: Montserrat;
 font-style: normal;
 font-weight: normal;
 font-size: 18px;
 line-height: 22px;
 text-align: center;
 white-space: pre-line;
 width: 300px;

 `;