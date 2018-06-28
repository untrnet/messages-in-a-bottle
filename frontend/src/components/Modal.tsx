import {
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
  footer: string;
  isVisible?: boolean;
  handleClose?(): void;
}

export const Modal = (props: ModalProps): JSX.Element => {
  console.log(props);
  return (
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
          {props.footer}
          <button onClick={props.handleClose}>ye</button>
        </ModalCardFooter>
      </ModalCard>
    </BulmaModal>
  );
};