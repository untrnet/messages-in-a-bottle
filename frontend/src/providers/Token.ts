const Fingerprint = require("fingerprintjs2");

export class Token {
  private static DELIMITER = "+";

  public static async generate(service = Fingerprint): Promise<string> {
    const fingerprint = await this.generateFingerprint(service);
    return fingerprint +
      this.DELIMITER +
      this.generateTimestamp();
  }

  private static generateFingerprint(service: any): Promise<string> {
    return new Promise((resolve, reject) => {
      new service()
        .get((result: string) => resolve(result));
    });
  }

  private static generateTimestamp(): string {
    return new Date()
      .getTime()
      .toString();
  }
}