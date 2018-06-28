import { connect } from "react-redux";
import { Store } from "redux";

import { Message, MessageProps } from "../components/Message";
import { getErrorText } from "../providers/text";
import { getCurrentMessage } from "../store/messages/selectors";

const mapStateToProps = (state: Store<any>): MessageProps => ({
    currentMessage: getCurrentMessage(state),
    errorText: getErrorText("noCurrentMessage")
});

const CurrentMessage = connect(mapStateToProps)(Message);

export default CurrentMessage;
