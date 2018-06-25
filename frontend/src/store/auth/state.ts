export interface AuthState {
    token: string;
    isLoading: boolean;
    isAuthenticated: boolean;
}

export const initialState: AuthState = {
    token: "",
    isLoading: false,
    isAuthenticated: false
};
