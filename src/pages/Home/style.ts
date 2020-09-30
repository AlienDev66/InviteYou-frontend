import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ImageLogo = styled.img`
  display: block;
  /* margin-top: 239px; */
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 221.5px;
  height: 62.5px;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  width: 124px;
  height: 37.5px;
  /* margin-top: 438px; */

  border: 2px solid var(--color-header);
  box-sizing: border-box;
  border-radius: 74px;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: none;
  color: var(--color-header);

  &:hover {
    background-color: var(--color-header);
    color: #fff;
    cursor: pointer;
    transition: 1s;
  }
  &:active {
    border-color: none;
  }
`;
export const Content = styled.div`
  display: flex;
  padding: 0;
  width: 50%;
  height: 100%;
  justify-content: center;
  /* background: red; */
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  /* align-content: center; */
`;
