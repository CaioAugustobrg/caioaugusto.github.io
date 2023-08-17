import MainTitle from "../../components/MainTitle";
import { Container,Year,PostList,PostItem,Post,Publication } from "./styles";



const Publications = () => {
return (

    <Container>
      <Publication>

      <MainTitle title="Publications" />
      <Post>


      <Year>2023</Year>
      <PostList>
        <PostItem><a href="https://medium.com/@caioaugustobrg">
           Como criar um servidor em Node.js/Express.js
          </a>
           </PostItem>
      </PostList>
      </Post>
      </Publication>
    </Container>
  );
};
export default Publications;