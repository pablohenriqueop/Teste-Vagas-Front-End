import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import Box from "./components/Box/index";
import Header from "./components/Header";
import Title from "./components/Title";
import Spacer from "./components/Spacer";
import Form from "./components/Form";
import Label from "./components/Label";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Box>
        <Header>
          <Title>
            Formulário <br />
            para compra de <br /> <strong>Pacote de Stickers </strong>
          </Title>
        </Header>
        <Spacer size="small"></Spacer>
        <Form>
          <fieldset>
            <Label>Quais stickers?</Label>
          </fieldset>
        </Form>
      </Box>
    </div>
  );
}

export default App;
