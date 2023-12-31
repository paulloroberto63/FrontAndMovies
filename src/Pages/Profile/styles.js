import styled from "styled-components";

export const Container = styled.div`
> header {
    display: flex;
    background-color: ${({theme}) => theme.COLORS.BROWN_100};
    height: 144px;

    align-items: center;
    
    svg {
      margin-left: 144px;
    }
  }
`
export const Form = styled.form`
max-width: 340px;
margin: 40px auto 0 ;

`

export const Avatar = styled.div`

  position: relative;
  width: 186px;
  height: 186px;

  margin: -160px auto 50px;
  
  > img {
    width: 186px;
    height: 186px;
    border-radius: 100%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({theme}) => theme.COLORS.BLACK};
    }}
`