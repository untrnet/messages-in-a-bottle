import { Column, Columns, Container } from "bloomer";
import * as React from "react";

import { store } from "./store";
import { Actions as AuthActions } from "./store/auth/actions";
import { Actions as ConfigActions } from "./store/config/actions";

import { getConfig } from "./providers/Config";

import CurrentMessage from "./containers/CurrentMessage";
import SubmitMessage from "./containers/SubmitMessage";
import Welcome from "./containers/Welcome";

/**
 * The root application component.
 */
class App extends React.Component {
  public componentDidMount() {
    this.dispatchInitialiastionActions();
  }

  /**
   * Dispatches the actions to the store necessary for the app
   * to bootstrap successfully.
   * @private
   */
  private dispatchInitialiastionActions(): void {
    store.dispatch(
      ConfigActions.Load(getConfig())
    );
    store.dispatch(AuthActions.Create());
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <Welcome />
        <Container>
          <Columns isCentered={true} isMarginless={true}>
            <Column>
              <CurrentMessage />
              <SubmitMessage />
            </Column>
          </Columns>
        </Container>
      </div>
    );
  }
}

export default App;
