import { Container, Title } from "bloomer";
import * as React from "react";

import { getConfig } from "./providers/Config";

import { store } from "./store";
import { Actions as AuthActions } from "./store/auth/actions";
import { Actions as ConfigActions } from "./store/config/actions";

class App extends React.Component {
  public componentDidMount() {
    store.dispatch(
      ConfigActions.Load(getConfig())
    );
    store.dispatch(AuthActions.Create());
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
