import { Container, Title } from "bloomer";
import * as React from "react";

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <Container>
          <Title tag="h1" isSize={1}>Messages in a Bottle</Title>
        </Container>
      </div>
    );
  }
}

export default App;
