import styled from "styled-components";
import tags from "./tags.json";
import Titulo from "../../Titulo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Adds spacing between the title and tags */
`;

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* Allows tags to wrap to the next line */
  gap: 10px; /* Adds spacing between each tag */
  padding: 0;
  margin: 0;
  list-style: none;
`;

const TagItem = styled.li`
  border: 2px solid #e591f1;
  padding: 5px 10px;
  border-radius: 10px;
  background-color:  #e591f1;;
  color: #060606;
  font-size: 14px;
`;

const TituloTag = styled.h1`
  border: 2px solid #e591f1;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #e591f1;
  color: #090909; 
  font-size: 14px;
`;


const Tags = () => {
  return (
    <Container>
        <TagsList>
         <TituloTag>Busque por Tags:</TituloTag>   
        {tags.map((tag) => (
          <TagItem key={tag.id}>{tag.titulo}</TagItem>
        ))}
      </TagsList>
    </Container>
  );
};

export default Tags;
