export class AuthStorage {
  private static TOKEN_KEY = "Authorization";

  public static fetchToken(): string {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!!token) {
      return token;
    } else {
      throw new Error("token not found");
    }
  }

  public static addToken(token: string): void {
    if (!localStorage.getItem(this.TOKEN_KEY)) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }
}