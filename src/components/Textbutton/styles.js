import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled(Link)`
 display: flex;
  align-items: center;
  
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BLACK};
  
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  border-radius: 10px;
  
  > svg {
    margin-right: 8px;
  }
  ;
`
