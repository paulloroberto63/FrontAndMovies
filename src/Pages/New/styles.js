import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    width: 1137px;
    margin: 0 auto;
    grid-area: content;
    overflow-y: auto;
  }`

export const Content = styled.div`
  width: 100%;
  margin: 40px auto 0;
  padding: 0 20px;
 
  > h1 {
    font-weight: 500;
    font-size: 36px;
    margin-top: 24px;
    color: ${({theme}) => theme.COLORS.WHITE_100};
  }
`
export const Form = styled.form`
  
  margin: 40px auto;

  > div {
    display: flex;
    gap: 40px;
  }

  > textarea {
    margin-top: 40px;
  }

  > section{
    
   > div{
    display: flex;
    padding: 16px;
    gap: 24px;
  
    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
   }}
`

export const NewNote = styled.div`
  > div {
    width: 100%;
    display: flex;

    gap: 40px;

    button{
      width: 100%;
      background-color: ${({theme}) => theme.COLORS.PINK};
      color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }

  }
`