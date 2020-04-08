import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100%;
  display: flex;
`;

export const MapContainer = styled.div`
  width: 75%;
`;

export const ListContainer = styled.div`
  width: 25%;
  max-height: 100%;
  overflow: scroll;
`;

export const PageTitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 44px;
  text-align: center;
`;

export const TextField = styled.input`
  width:  100%;
  height: 35px;
  border: 1px solid rgba(48, 48, 48, 0.25);
  border-radius: 5px;
  margin-bottom: 20px;
`;