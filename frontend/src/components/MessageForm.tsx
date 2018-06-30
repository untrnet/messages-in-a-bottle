import * as React from "react";
import { Field } from "redux-form";

/**
 * A form for submitting a new message.
 * @param props The props handed into the component.
 */
export const MessageForm = (props: any) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <div className="field">
        <label htmlFor="newMessage">Your message:</label>
        <Field
          name="newMessage"
          component="textarea"
          className="textarea is-primary"
        />
      </div>
      <div className="field">
        <button
          type="submit"
          className="button is-primary"
        >
          ok go
      </button>
      </div>
    </form>
  </div>
);