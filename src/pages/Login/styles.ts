import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: var(--color-header);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 460px;
  height: 550px;
  background: var(--color-login);
  border-radius: 10px;
  box-shadow: 10px;
`;

export const ImageLogin = styled.img`
  margin-top: 10px;
  width: 69px;
  height: 67px;
`;
