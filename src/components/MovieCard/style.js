import styled from 'styled-components';

export const MovieCardContainer = styled.div``;
export const MovieCardImageContainer = styled.div`
  position: relative;
`;
export const MovieCardScore = styled.p`
  text-align: center;
  position: absolute;
  left:0;
  right:0;
  top: -10px;

  span{
    background-color: #DC2424;
    border-radius: 10px;
    font-size: 12px;
    padding: 1px 10px;
  }
`;
export const MovieCardImage = styled.img`
  max-width: 100%;
`;
export const MovieCardTitle = styled.p`
  font-size: 16px;
  margin-top: 5px;
`;