import styled from "styled-components";
import tags from "./tags.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espaçamento entre título e lista de tags */
`;

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* Permite que as tags quebrem para a próxima linha */
  gap: 10px; /* Espaçamento entre as tags */
  padding: 0;
  margin: 0;
  list-style: none;
`;

const TagItem = styled.li`
  border: 2px solid ${({ ativo }) => (ativo ? "#629359" : "#147a03")};
  background-color: ${({ ativo }) => (ativo ? "#629359" : "#147a03")};
  color: ${({ ativo }) => (ativo ? "#FFFFFF" : "#060606")};
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
`;

const TituloTag = styled.h1`
  border: 2px solid #147a03;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: #147a03;
  color: #090909;
  font-size: 14px;
`;

const Tags = ({ tagSelecionada, setTagSelecionada }) => {
  const alterarTag = (tag) => {
    setTagSelecionada(tag);
  };

  return (
    <Container>
      <TituloTag>Busque por Tags:</TituloTag>
      <TagsList>
        {tags.map((tag) => (
          <TagItem
            key={tag.id}
            onClick={() => alterarTag(tag.titulo)}
            ativo={tagSelecionada === tag.titulo}
          >
            {tag.titulo}
          </TagItem>
        ))}
      </TagsList>
    </Container>
  );
};

export default Tags;
