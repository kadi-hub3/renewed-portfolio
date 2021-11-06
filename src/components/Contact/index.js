import React from 'react'
import { ContactContainer,
    ContactRow,
    Column1,
    Column2,
    TextWrapper,
    TextTitle,
    TextContent,
    ImgWrap,
    Img,} from './Contact.styles'
import Form from '../Form'

const ContactSection = ({imgStart, img, alt,id, description, topLine}) => {
    return (
        <ContactContainer id={id}>
        <ContactRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
                <TextTitle>
                <svg viewBox="10 30 2000 700">
                  <text x="0%" y="60%" fill="transparent" text-anchor="start">
                    {topLine}
                  </text>
                </svg>
                </TextTitle>
                <TextContent>
                  {description}           
                 </TextContent>
            </TextWrapper>
            <Form/>
          </Column1>
          <Column2>
            <ImgWrap>
            <Img src={img} alt={alt}/>
            </ImgWrap>
          </Column2>
          </ContactRow>
    </ContactContainer>
    )
}

export default ContactSection