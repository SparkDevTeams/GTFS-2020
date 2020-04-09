import React, { useEffect, useState } from "react";
import { Container, CardListContainer, Title } from "./styles";
import API from "../../../Services/API";
import Card from "../../Commons/Card/Card";
import {IoMdTrain} from 'react-icons/io';

const TrirailPanel = (props) => {
  const [trirails, setTrirails] = useState([]);

  useEffect(() => {
    async function getTrirails() {
      let response = await API.getAllTrirail();
      setTrirails(response);
    }
    getTrirails();
  }, []);

  const handleTrirailClick = async (id) => {
    let shape = await API.getTrirailShape(id);
    props.setShape(shape);
  }
  return (
    <Container>
      <Title>Trirails</Title>
      <CardListContainer>
        {trirails.map((trirail, idx) => (
          <Card
            width="90%"
            height="20%"
            margin="10px"
            cursor="pointer"
            hover
            selfCenter
            key={trirail.id}
            onClick={() => handleTrirailClick(trirail.id)}
          >
            <IoMdTrain />{trirail.name}
          </Card>
        ))}
      </CardListContainer>
    </Container>
  );
};

export default TrirailPanel;
