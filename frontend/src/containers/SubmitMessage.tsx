import * as React from "react";
import { Field, reduxForm } from "redux-form";

// const onSubmit = () => console.log("hello");

const Form = (props: any) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      {/* <textarea name="ye" id="ye" cols={30} rows={10} /> */}
      <label htmlFor="ye">Your message:</label>
      <Field name="ye" component="input" type="text" />
      <button type="submit" value="ok go" />
    </form>
  </div>
);

const SubmitMessage = reduxForm({
  form: "submitMessage"
})(Form);

export default SubmitMessage;