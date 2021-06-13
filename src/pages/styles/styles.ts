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
  width: 1920px;
  height: 1080px;
  background: transparent url('./Mask.png') 0% 0% no-repeat padding-box;
  opacity: 0.6;

  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  .image {
    position: absolute;
  }
`;

export const TextInfo = styled.div`
  position: relative;
  width: 25%;
`;

export const TitleTextInfo = styled.p``;