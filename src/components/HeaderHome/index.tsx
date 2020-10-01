import React from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper } from "./styles";

const HeaderHome: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="right">
          <nav>
            <Link to="/login">Login</Link>
          </nav>
          <nav>
            <Link to="/register">Cadastro</Link>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default HeaderHome;
