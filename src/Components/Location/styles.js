import styled from 'styled-components';

export const LocationButton = styled.div`
  background: #FFFFFF;
  border-radius: 4px;
  width: 25px;
  height: 25px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.35);
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 10px;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledLocationIcon = styled.svg`
  width: 100%;
  height: 100%;
`;