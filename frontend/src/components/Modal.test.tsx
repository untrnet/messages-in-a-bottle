import { Button, Modal as BulmaModal, ModalCardBody, ModalCardTitle } from "bloomer";
import { configure, shallow, ShallowWrapper } from "enzyme";

import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import { Modal, ModalProps } from "./Modal";

describe("Component: Modal", () => {
  let wrapper: ShallowWrapper;

  const closeStub: jest.Mock<any> = jest.fn();
  const HIDDEN_MODAL_PROPS: ModalProps = {
    title: "test modal",
    description: "this is some descriptive text for the modal.",
    instructions: "this is some instructional text for the modal.",
    button: "click me fam",
    isVisible: false,
    handleClose: closeStub
  };
  const VISIBLE_MODAL_PROPS: ModalProps = {
    ...HIDDEN_MODAL_PROPS,
    isVisible: true
  };

  beforeEach(() => {
    configure({ adapter: new Adapter() });
    wrapper = shallow(<Modal {...HIDDEN_MODAL_PROPS} />);
  });

  describe("Initialisation", () => {
    it("Renders successfully", () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe("Rendering props", () => {
    it("Renders the title prop in the ModalCardTitle", () => {
      expect(
        wrapper.find(ModalCardTitle).html()
      ).toContain(VISIBLE_MODAL_PROPS.title);
    });

    describe("Modal body content", () => {
      let result: string;

      beforeEach(() => {
        result = wrapper.find(ModalCardBody).html();
      });

      it("Renders the description prop", () => {
        expect(result).toContain(VISIBLE_MODAL_PROPS.description);
      });

      it("Renders the instructions prop", () => {
        expect(result).toContain(VISIBLE_MODAL_PROPS.instructions);
      });
    });

    describe("Modal Button", () => {
      let result: ShallowWrapper;

      beforeEach(() => {
        result = wrapper.find(Button);
      });

      it("Renders the button prop as its text", () => {
        expect(result.html()).toContain(VISIBLE_MODAL_PROPS.button);
      });

      it("Calls the handleClose prop when clicked", () => {
        result.simulate("click");
        expect(closeStub).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("Modal visibility", () => {
    it("Is not visible on screen when the isVisible prop is false", () => {
      expect(
        wrapper.find(BulmaModal)
          .html()
      ).not.toContain("is-active");
    });

    it("is visible on screen when the isVisible prop is true", () => {
      wrapper = shallow(<Modal {...VISIBLE_MODAL_PROPS} />);
      expect(
        wrapper.find(BulmaModal)
          .html()
      ).toContain("is-active");
    });
  });
});