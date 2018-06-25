import { Container, Title } from "bloomer";
import * as React from "react";

import { store } from "./store";
import { Actions as authActions } from "./store/auth/actions";

class App extends React.Component {
  public componentDidMount() {
    store.dispatch(authActions.Create());
  }

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
