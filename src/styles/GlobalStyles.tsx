import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
html {
  font-family: "Inter", sans-serif;
  font-size: 10px;
  -webkit-font-smoothing: antialiased !important;
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: ${theme.colors.rebeccaPurple};
  color: ${theme.colors.pineGreen};
  font-size: 1.4rem;
}

.header {
  background: url(images/header.png) center right no-repeat;
  background-size: cover;
  height: 187px;
  padding: 23px 36px;
  width: 100%;
}

.header .title {
  color: #fff;
  font-size: 23px;
  font-weight: 300;
}

.header .title span {
  font-weight: bold;
  font-size: 24px;
  line-height: 1.46;
}

.form textarea {
  background: #dde3e9;
  border: 1px solid #2f3676;
  border-radius: 8px;
  color: #071723;
  height: 140px;
  padding: 16px;
  resize: none;
  width: 100%;
  font-size: 14px;
}

fieldset {
  padding: 0 32px;
  background: none;
  border: none;
}

.counter svg {
  fill: #2f3676;
}

.counter input {
  background: #dde3e9;
  border: 1px solid #2f3676;
  border-radius: 7px;
  font-size: 20px;
  font-weight: bold;
  margin: 0 8px;
  width: 60px;
}

.footer {
  padding: 32px;
  background: #dde3e9;
  display: flex;
  justify-content: flex-end;
}

.footer button {
  appearance: none;
  background: #2f3676;
  border: 0;
  border-radius: 8px;
  color: #fff;
  padding: 10px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 8px 32px;
}

.footer button:focus,
.footer button:hover {
  border: 2px solid #2f3676;
  background: #191847;
}



`;
