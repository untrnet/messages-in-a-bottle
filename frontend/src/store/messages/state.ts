export interface MessagesState {
  currentMessage: string;
  isLoading: boolean;
}

export const initialState: MessagesState = {
  currentMessage: "",
  isLoading: false
};
