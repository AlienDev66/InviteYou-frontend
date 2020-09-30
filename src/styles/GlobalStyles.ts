import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
html, body, #root{
 height: 100%;
 width: 100%;
 background: var(--color-background)
}
:root{
 --color-header: #320F1C;
 --color-text1: #001e36;
 --color-background: #F6F6F6;
}
`;
