import React from "react";
import HeaderHome from "../../components/HeaderHome";
import LogoLogin from "../../assets/LogoLogin.svg";
import { Container, Content, ImageLogin, DivInp } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <HeaderHome />

      <Content>
        <ImageLogin src={LogoLogin} />
        <DivInp>
          <p>Email:</p>
          <input className="inp1" type="email" />
          <p>Senha:</p>
          <input type="text" />
          <br />
          <input type="button" value="Iniciar" />
        </DivInp>
      </Content>

    </Container>
  );
};

export default Login;
