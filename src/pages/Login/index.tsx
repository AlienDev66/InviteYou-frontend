import React from "react";
import HeaderHome from "../../components/HeaderHome";
import LogoLogin from "../../assets/LogoLogin.svg";
import { Container, Content, ImageLogin } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <HeaderHome />

      <Content>
        <ImageLogin src={LogoLogin} />
      </Content>
    </Container>
  );
};

export default Login;
