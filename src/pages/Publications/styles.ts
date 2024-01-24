import styled from "styled-components";
const breakpoint = "768px";
import {BsArrowLeft} from "react-icons/bs";
export const Container = styled.div`
 width: 100%;
 max-width: 720px;
 text-align: left;
 //padding: 20px;
overflow: hidden;
 margin: auto;
 min-height: 85vh;
  @media (max-width: ${breakpoint}) {
width: 95%;
display: flex;
justify-content: center;

}
`;
export const Publication = styled.main`
width: 100%;
max-width: 800px;
text-align: left;
/* padding: 20px; */
height: 705px;
margin: 20px auto;
`;
export const Year = styled.div`
margin-right: 1.8em;
padding-top: 6px;
font-size: 1.8em;
opacity: .6;
margin-bottom: bottom;

`;

export const PostList = styled.ul`

`;

export const PostItem = styled.li`
     list-style: circle;
    border-bottom: 1px grey dashed;
    align-items: baseline;
    padding: 12px 0;
    a {
        color: inherit;
    }
    cursor: pointer;
    &:hover {
        color: #6fb7ed;
    }
`;
export const Post = styled.div`
display: flex;
//justify-content: center;
`;

export const ThisPublication = styled.div`
z-index: 499;
width: 100%;
 max-width: 720px;
height: auto;
margin:20px auto;
text-align: justify;
align-items: center;
p {
  text-align: justify;
   margin-bottom: 7px;
   text-indent: 50px;
   }
   div {
    display: flex;
    text-align: justify;
   }
`;

export const PublicationTitle = styled.h2`
 font-size: 1.5rem;
  margin-bottom: 10px;
 a {
    color: inherit;
 }
 :hover {
        color: #6fb7ed;
    }
`;

export const StyledBsArrowLeft = styled(BsArrowLeft)`
    cursor: pointer;
    width: 25px;
    height: 30px;
    margin-right: 10px;
    &:hover {
        color: #6fb7ed;
    }
`;