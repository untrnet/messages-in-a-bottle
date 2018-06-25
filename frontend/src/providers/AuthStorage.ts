export class AuthStorage {
  private TOKEN_KEY = "Authorization";

  public fetchToken(): string {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!!token) {
      return token;
    } else {
      throw new Error("token not found");
    }
  }

  public addToken(token: string): void {
    if (!localStorage.getItem(this.TOKEN_KEY)) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }
}