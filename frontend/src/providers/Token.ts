const Fingerprint = require("fingerprintjs2");

/**
 * Represents the token provider, which generates authentication
 * tokens for use with the backend when sending messages. The
 * authentication token consists of two parts: a browser fingerprint
 * and a timestamp, which together verify a visitor as unique. This is
 * done to assure that a visitor can send only a single message to the
 * backend.
 */
export class Token {
  private DELIMITER = "+";

  /**
   * Generates a new authentication token.
   * @param service the browser fingerprinting service to be used.
   * @returns {Promise<string>} The authentication token.
   * @async
   */
  public async generate(service = Fingerprint): Promise<string> {
    const fingerprint = await this.generateFingerprint(service);
    return fingerprint +
      this.DELIMITER +
      this.generateTimestamp();
  }

  /**
   * Generates a browser fingerprint, which is used as part of the authentication
   * token.
   * @param service The browser fingerprinting service to be used.
   * @returns {Promise<string>} The browser fingerprint.
   */
  private generateFingerprint(service: any): Promise<string> {
    return new Promise((resolve, reject) => {
      new service()
        .get((result: string) => resolve(result));
    });
  }

  /**
   * Generates a timestamp, which is used as part of the authentication token.
   * @returns {string} The current time, formatted as a string.
   */
  private generateTimestamp(): string {
    return new Date()
      .getTime()
      .toString();
  }
}