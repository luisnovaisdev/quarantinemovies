import styled from 'styled-components';

export const MainContent = styled.main`
  height: 100%;
  background-color: var(--main-bg);
  grid-area: main;
  padding: 50px 40px;
`
export const MovieList = styled.div`
  display: grid;
  color: var(--sidebar-text);
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.page <= 1) ? 'flex-end' : 'space-between'  };
  margin-top:30px;
`;
export const PrevPagination = styled.button`
  background-color: #DC2424;
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  color: #fff;
  font-size: 13px;
  font-size: 13px;
  transition: opacity 0.3s;
  display: ${props => (props.page <= 0) ? 'none' : 'block'  };

  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }
`;
export const NextPagination = styled.button`
  background-color: #DC2424;
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  color: #fff;
  font-size: 13px;
  transition: opacity 0.3s;
  

  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }
`;