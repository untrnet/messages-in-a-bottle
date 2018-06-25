import { Container, Title } from "bloomer";
import { store } from "./store";
import { actions as authActions } from "./store/auth/actions";

import * as React from "react";

class App extends React.Component {
  public componentDidMount() {
    store.dispatch(authActions.create());
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
