import {
  Button,
  Content,
  Modal as BulmaModal,
  ModalBackground,
  ModalCard,
  ModalCardBody,
  ModalCardFooter,
  ModalCardHeader,
  ModalCardTitle
} from "bloomer";
import * as React from "react";

export interface ModalProps {
  title: string;
  description: string;
  instructions: string;
  button: string;
  isVisible?: boolean;
  handleClose?(): void;
}

/**
 * A modal which displays instructions on how to use the app.
 * @param props The props handed into the component.
 */
export const Modal = (props: ModalProps): JSX.Element => (
  <BulmaModal isActive={props.isVisible}>
    <ModalBackground />
    <ModalCard>
      <ModalCardHeader>
        <ModalCardTitle>{props.title}</ModalCardTitle>
      </ModalCardHeader>
      <ModalCardBody>
        <Content>
          <p>{props.description}</p>
          <p>{props.instructions}</p>
        </Content>
      </ModalCardBody>
      <ModalCardFooter>
        <Button onClick={props.handleClose} isFullWidth={true} isColor="primary">{props.button}</Button>
      </ModalCardFooter>
    </ModalCard>
  </BulmaModal>
);