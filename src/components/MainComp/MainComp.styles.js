import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'

export const InfoContainer = styled.div`
  display: grid;
  height: 800px;
  width: 100%;
  margin-left: auto;
  margin-right:auto;
  padding-left: 50px;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  color: ${({lightText})=>lightText? '#fff':'#000'};
  background: ${({lightBg})=>lightBg? '#1e2127':'#16181d'};
  // background: ${({darkBg})=>darkBg? '#E0F1EB':'#D2E1F3'};
  @media screen and (max-width: 768px) {
        padding: 100px 0;
        padding-left: 40px;
        height: 100%;
      }
    
  .btn-hero{
    path{
      stroke: rgba(245, 158, 11);
    }
    &:hover{
      path{
        stroke: #333;
      }
    }
  }
  `;

export const InfoRow= styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  height: 100%;
  width: 100%;
  padding-bottom: 20px;
  letter-spacing: 1px;
  line-height: 1.5;
`;

export const TextTitle = styled.h1``;

export const TextContent = styled.p`
  font-size: 14px;
  letter-spacing: 1px;

  a{
    color:rgb(5, 150, 105);
    text-decoration: none;
    cursor: pointer;
  }
`;


export const Link=styled(LinkS)`
  color: rgb(5, 150, 105);
  cursor: pointer;
`;


export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  width: 100%;

`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 0 10px 0;
  padding: 0;
`;