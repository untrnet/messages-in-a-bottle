import { connect } from "react-redux";
import { Dispatch, Store } from "redux";

import { Actions } from "../store/ui/actions";
import { getModalVisibility } from "../store/ui/selectors";

import { Modal, ModalProps } from "../components/Modal";
import { getModaltext } from "../providers/text";

const mapStateToProps = (state: Store<any>): ModalProps => ({
    ...getModaltext(),
    isVisible: getModalVisibility(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleClose: () => dispatch(Actions.Hide())
});

const Welcome = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default Welcome;