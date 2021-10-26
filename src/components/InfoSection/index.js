import {
    InfoContainer,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Topline,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
  } from './Info.styles'

const InfoSection = ({
  headline,
  topLine,
  img,
  imgStart,
  alt,

}) => {
    return (
        <InfoContainer>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading>{headline}</Heading>
                <Topline>{topLine}</Topline>
                <BtnWrap>
                  {/* <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button> */}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
      </InfoContainer>
    )
}

export default InfoSection
