import styled from 'styled-components'
import Image from 'next/image';

export const Container = styled.div`

`;

export const ContainerInit = styled.div`
  margin-left: 200px;
  /* margin-top: 300px; */
  display: flex;
`;

export const ContainerContentInit = styled.div`
  width: 40%;
  margin-right: 20px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 55px;
  color: ${({ theme }) => theme.colors.green};
`;

export const Description = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textColor};
  line-height: 2em;
  margin-top: 1em;
`;

export const Img = styled(Image)`
  background: #00000F 0% 0% no-repeat padding-box;
  mix-blend-mode: multiply;
  opacity: 0.38;
  position: fixed;
`;

export const ContainerWhoWeAre = styled.div`
  height: 1080px;
  background: transparent url('./Mask.png') 0% 0% no-repeat padding-box;
  opacity: 0.6;

  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  width: 894px;
  height: 903px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextInfo = styled.div`
  position: absolute;
  width: 25%;
  display: flex;
  flex-direction: column;
`;

export const Services = styled.div`
  /* height: 1080px; */

  display: flex;
  justify-content: space-evenly;
`;

export const ContentService = styled.div`
  display: flex;
  margin-left: 10em;

  .card02 {
    margin-left: 39px;
    margin-top: 10em;
  }
`;

export const CardService = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 431px;
  width: 411px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 7px;
  box-shadow: 0px 0px 40px #0000008A;
  margin-top: 39px;

  .cardServiceHeader {
    background: ${({ theme }) => theme.colors.green};
    height: 103px;
    margin-top: 69px;
    display: flex;
    align-items: center;
    padding-left: 20px;

    opacity: 0.48;

    .icone {
      width: 69px;
      height: 61px;

      background: ${({ theme }) => theme.colors.textColor};
    }
    
    p {
      font-size: 23px;
      color: ${({ theme }) => theme.colors.textColor};
      margin-left: 20px;

    }
  }

  .title {
    font-size: 23px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textColor};
    margin-left: 33px;
    margin-top: 33px;
  }

  .description {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textColor};
    margin-left: 33px;
    margin-right: 33px;
    line-height: 2;
  }
`;

export const CardDescriptionText = styled.div`
  font-size: 55px;
  color: ${({ theme }) => theme.colors.green};

  display: flex;
  align-self: flex-end;
`;

export const ContentDescription = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  text-align: right;
`;

export const TextInfoContent = styled.p`
  position: absolute;
  display: flex;
  flex-direction: column;
`;

export const Portfolio = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ContentPortfolio = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextInfoPortfolio = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 21em;
  top: 18em;
`;

export const ContentProjects = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  right: 0;

  width: 772px;
  height: 564px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  box-shadow: 0px 0px 40px #0000008A;
  border-radius: 7px;
  /* padding: 40px; */

  > div {
    display: flex;
  
  }
`;

export const ContentFrame = styled.div`
  width: 100px;
  height: 100px;

  border: 1px solid ${({ theme }) => theme.colors.green};
  box-shadow: 0px 0px 40px #0000008A;
  border-radius: 7px;
  margin-left: 74px;
  margin-top: 30px;

`;