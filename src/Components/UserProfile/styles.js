import styled from 'styled-components';

export const PageContainer = styled.div`
width: 100%;
display: flex;
`;


export const ProfileContainer = styled.div`

 justify-content: center;
 align-items: center;
 font-size: 16px;
display: flex;
width: 60%;
margin-top: 5%;
`;

export const SideContainer = styled.div`
display: flex;
align-items: center;
font-size: 16px;
justify-content: center;
width: 30%;
margin-top: 5%;
`;

export const ProfileImage = styled.img`

 border-radius: 60%;
justify-content: center;
display: flex;
align-items: center;
height: 128px;
width: 128px;
border: 4px solid #EAEAEA;
box-sizing: border-box;
`;

export const StyledHr = styled.hr`
width: 500px;
`;

export const Row = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({width}) => width ? width : '100%'};
`;

export const About = styled.textarea`
height: 200px;
width:  100%;
border: 1px solid rgba(48, 48, 48, 0.25);
border-radius: 5px;
margin-bottom: 20px;
resize: none;
`;

export const ProfileDescription = styled.p`
padding-top: 20px;
font-size: 14px;

`;

