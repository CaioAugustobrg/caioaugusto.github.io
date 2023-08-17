import styled from 'styled-components';
const breakpoint = '768px'
export const Container = styled.div`
 width: 100%;
 max-width: 720px;
 text-align: left;
 //padding: 20px;
overflow: hidden;
 margin: auto;
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
height: 660px;
margin: 20px auto;
`
export const Year = styled.div`
margin-right: 1.8em;
font-size: 1.6em;
opacity: .6;

`

export const PostList = styled.ul`

`

export const PostItem = styled.li`
 a {
    color: inherit;
    cursor: pointer;
     }
     list-style: circle;
    border-bottom: 1px grey dashed;
    align-items: baseline;
    padding: 12px 0;
    :hover {
        color: #6fb7ed;
    }
`
export const Post = styled.div`
display: flex;
//justify-content: center;
align-items: center;

`