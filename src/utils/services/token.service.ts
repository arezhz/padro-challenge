export default class TokenService {
  static getToken(): string | null {
    return localStorage.getItem("access-token");
  }

  static setToken(token: string) {
    localStorage.setItem("access-token", token);
  }
}
