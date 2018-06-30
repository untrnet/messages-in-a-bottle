/**
 * Represents the Authentication Storage provider, which
 * handles the management of an authentication token
 * within the browser's local storage.
 */
export class AuthStorage {
  private TOKEN_KEY = "Authorization";

  /**
   * Gets an authentication token from the browser's local storage.
   * @returns {string} The authentication token.
   */
  public fetchToken(): string {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!!token) {
      return token;
    } else {
      throw new Error("token not found");
    }
  }

  /**
   * Saves an authentication token to local storage, if one does
   * not already exist.
   * @param token The authentication token to be saved.
   */
  public addToken(token: string): void {
    if (!localStorage.getItem(this.TOKEN_KEY)) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }
}