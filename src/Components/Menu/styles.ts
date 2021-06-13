import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: pointer;
`;

export const Line = styled.span`
  width: 30px;
  height: 3px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.green};
  margin-top: 8px;
`;