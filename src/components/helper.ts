import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #f05053, #e1eec3);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  :disabled {
    opacity: 0.4;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  font-size: 10px;
  margin: 0 0 40px 0;
`;
export const StyledMessage = styled.div`
  color: green;
  font-weight: 800;
  font-size: 10px;
  margin: 0 0 40px 0;
`;


// export const NavMenu = styled.ul`
//  display: flex;
//  justify-content : space-between;
//  align-items: center;

//  @media screen and(max-width: 960px){
//    display:flex;
   
//    flex-direction: column;
//    justify-content: center;
//    align-items : center;
//    top: 70px;
//    left : ${({ click }) => (click ? 0 : "-100%")}
//    opacity : 1;
//    transition : all 0.5s ease;
//    background : #101522;
//  }
// `;

// export const NavItem = styled.li`
//   heigth: 70px
//   border-botton : 2px solid transparent;
//   &hover:{
//     border-botton : 2px solid #4bf957;
//   }

//   @media screen and (max-width: 960px){
//    width:100%;
//    &hover:{
//     border:none;
//    }
//   }

// `;

// export const NavLinks = styled(Link)`
//   display: flex;
//   align-items: center
//   color : #fff;
//   padding : 0.3rem 0.8rem;
//   text-decoration:none;
//   height:100%;
//   @media screen and(max-width: 960px){
//     text-align:center;
//     width: 100%;
//     padding : 2rem;
//     &hover:{
//     color:#4bf957;
//     transition : all 0.5s ease;
//     }
//   }
// `;



