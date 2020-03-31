import styled from 'styled-components';

export const ProfileContainer = styled.div`

 justify-content: center;
 align-items: center;
 font-size: 16px;

/* Edit Profile Form */

position: absolute;
width: 862px;
height: 687px;
left: 77px;
top: 149px;


`;

export const SideContainer = styled.div`
position: absolute;
width: 396px;
height: 439px;
left: 1003px;
top: 149px;

background: #FFFFFF;
box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
`;

export const ProfileImage = styled.img`
  // height: 100px;
  // width: 100px;
 border-radius: 50%;
  // position: absolute;
width: 125px;
height: 125px;
left: 1138px;
top: 210px;

background: url(Kayashecktbh.jpg);
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
`;