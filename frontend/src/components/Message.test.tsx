import { Title } from "bloomer";
import { configure, shallow, ShallowWrapper } from "enzyme";

import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import { Message, MessageProps } from "./Message";

describe("Component: Message", () => {
  let wrapper: ShallowWrapper;

  const MESSAGE_PROPS: MessageProps = {
    currentMessage: "hello text",
    errorText: "there are no messages"
  };

  const NO_MESSAGE_PROPS: MessageProps = {
    errorText: "there are no messages"
  };

  beforeEach(() => {
    configure({ adapter: new Adapter() });
    wrapper = shallow(<Message {...MESSAGE_PROPS} />);
  });

  describe("Initialisation", () => {
    it("Renders successfully", () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });

  describe("With a current message", () => {
    it("Renders the current message", () => {
      expect(
        wrapper.find(Title)
          .props()
          .children
      ).toContain(MESSAGE_PROPS.currentMessage);
    });
  });

  describe("Without any current messages", () => {
    beforeEach(() => {
      wrapper = shallow(<Message {...NO_MESSAGE_PROPS} />);
    });

    it("Renders the error text", () => {
      expect(
        wrapper.find(Title)
          .props()
          .children
      ).toContain(NO_MESSAGE_PROPS.errorText);
    });
  });
});