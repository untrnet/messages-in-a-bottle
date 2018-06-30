import { reduxForm } from "redux-form";

import { store } from "../store";
import { Actions } from "../store/messages/actions";

import { MessageForm } from "../components/MessageForm";

const SubmitMessage = reduxForm({
  form: "submitMessage",
  onSubmit: (values: any) => store.dispatch(Actions.Submit(values.newMessage))
})(MessageForm);

export default SubmitMessage;