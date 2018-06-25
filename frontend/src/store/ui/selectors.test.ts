import * as selectors from "./selectors";
import { UIState } from "./state";

describe("Selectors: UI", () => {
  const VISIBLE: UIState = {
    isModalVisible: true
  };

  const NOT_VISIBLE: UIState = {
    isModalVisible: false
  };

  const UI_VISIBLE_STATE = {
    ui: VISIBLE
  };

  const UI_NOT_VISIBLE_STATE = {
    ui: NOT_VISIBLE
  };

  let result: boolean;

  describe("#getModalVisibility", () => {
    it("Returns true if the modal is currently visible", () => {
      result = selectors.getModalVisibility(UI_VISIBLE_STATE);
      expect(result).toBeTruthy();
    });

    it("Returns false if the modal isn't currently visible", () => {
      result = selectors.getModalVisibility(UI_NOT_VISIBLE_STATE);
      expect(result).toBeFalsy();
    });
  });
});