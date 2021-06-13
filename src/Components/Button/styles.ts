import styled from 'styled-components';

export const Button = styled.button`
  height: 36px;
  width: 141px;
  border: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.green} 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 40px ${({ theme }) => theme.colors.shadowColor};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.green} 0% 0% no-repeat padding-box;
    opacity: 0.8;
  }
`;