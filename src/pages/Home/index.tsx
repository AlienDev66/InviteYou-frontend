import React from "react";
import { Container, ImageLogo, Button, Content } from "./style";
import imgLogo from "../../assets/Logotipo.svg";
import HeaderHome from "../../components/HeaderHome";

const Home = () => {
  return (
    <Container>
      <HeaderHome />
      <Content>
        <ImageLogo src={imgLogo} />
        <Button>Crie seu convite</Button>
      </Content>
    </Container>
  );
};

export default Home;
