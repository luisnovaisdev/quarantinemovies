import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  background-color: var(--sidebar-bg);
  color: var(--sidebar-text);
  grid-area: sidebar;
  padding: 15px;

  > strong{
    font-family: Girassol;
    font-size: 25px;
    display: block;
    text-align: center;
  }
`;