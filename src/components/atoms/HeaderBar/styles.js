
import styled from 'styled-components';
import { color } from './../../../assets/css/colors';

export const StyledHeaderBar = styled.header`
  padding: 1rem 2rem 1rem;
  margin-bottom: 3rem;

  width: 100%;

  display:  ${({ showHeader }) => showHeader ? 'flex' : 'none'};

  justify-content: flex-end;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: ${color.black};
  }
`;