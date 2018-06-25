import { Actions } from "./actions";
import { uiReducer as reducer } from "./reducer";
import { UIState } from "./state";

describe("Reducer: UI", () => {
  const INITIAL_STATE: UIState = {
    isModalVisible: false
  };

  const VISIBLE_STATE: UIState = {
    isModalVisible: true
  };

  let result: UIState;

  describe("SHOW_MODAL", () => {
    it("Sets the modal visibility flag to true", () => {
      result = reducer(INITIAL_STATE, Actions.Show());
      expect(result.isModalVisible).toBeTruthy();
    });

    it("Does not modify the flag if it's already true", () => {
      result = reducer(VISIBLE_STATE, Actions.Show());
      expect(result.isModalVisible).toBeTruthy();
    });
  });

  describe("HIDE_MODAL", () => {
    it("Sets the modal visibility flag to false", () => {
      result = reducer(VISIBLE_STATE, Actions.Hide());
      expect(result.isModalVisible).toBeFalsy();
    });

    it("Does not modify the flag if it's already false", () => {
      result = reducer(INITIAL_STATE, Actions.Hide());
      expect(result.isModalVisible).toBeFalsy();
    });
  });

  describe("By default", () => {
    it("Returns the existing state", () => {
      result = reducer(INITIAL_STATE, {} as any);
      expect(result).toEqual(INITIAL_STATE);
    });
  });
});