import React from "react";

import { Container, Wrapper } from "./styles";

const HeaderHome: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="right">
          <nav>
            <a href="#">Login</a>
          </nav>
          <nav>
            <a href="#">Cadastro</a>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default HeaderHome;
