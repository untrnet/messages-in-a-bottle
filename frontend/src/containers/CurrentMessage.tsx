import { connect } from "react-redux";
import { Store } from "redux";

import { Message } from "../components/Message";
import { getCurrentMessage } from "../store/messages/selectors";

const mapStateToProps = (state: Store<any>) => ({
    CurrentMessage: getCurrentMessage(state)
});

const CurrentMessage = connect(mapStateToProps)(Message);

export default CurrentMessage;
