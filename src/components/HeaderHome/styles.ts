import styled from "styled-components";

export const Container = styled.header`
  /* background: var(--color-header); */
  height: 8%;
  padding: 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: none;
  @media (min-width: 1180px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  /* justify-content: center; */
  flex: 1;
  justify-items: center;
  .right {
    display: flex;
    flex-direction: row;
  }
  .right nav {
    height: 100%;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    align-items: center;
    justify-content: center;
    min-width: 90px;
    min-height: 100%;
  }
  .right a {
    color: var(--color-button);
    text-decoration: none;
  }
`;
