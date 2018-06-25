import { configure, shallow, ShallowWrapper } from "enzyme";

import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";

import App from "./App";

const stubLifeCycle = () => (
  jest.spyOn(App.prototype, "componentDidMount")
    .mockImplementation(jest.fn())
);

describe("Component: App", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    stubLifeCycle();
    configure({ adapter: new Adapter() });
    wrapper = shallow(<App />);
  });

  describe("Initialisation", () => {
    it("Successfully renders", () => {
      expect(wrapper.exists()).toBeTruthy();
    });
  });
});
