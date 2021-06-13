import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  margin: 20px;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;
`;

export const WrapperMenu = styled.div`

  @media (min-width: 1110px) {
    display: none;
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  overflow: hidden;

  @media(max-width: 1110px) {
    display: ${({ show }) => show ? 'none' : 'block' };
    position: fixed;
    margin-top: 3em;
    margin-right: 4em;
  }
`;

export const MenuItem = styled.li`
  font: normal normal 300 20px/25px Muli;
  margin-left: 50px;
  color: ${({ theme, selected }) => selected ? theme.colors.textColor : theme.colors.textFooter};


  border: ${({ selected, theme }) => selected ? `1px solid ${theme.colors.green}` : null};
  border-radius: 10px;
  height: ${({ selected }) => selected ? '56px' : 'none'};
  width: ${({ selected }) => selected ? '162px' : 'none'};
  display: ${({ selected }) => selected ?  'flex' : null};
  justify-content: ${({ selected }) => selected ? 'center' : null};
  align-items: ${({ selected }) => selected ?  'center' : null};

  @media(max-width: 1110px) {
   margin-top: 10px;
   /* text-align: center ; */
  }
`;