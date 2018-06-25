const Fingerprint = require("fingerprintjs2");

export class Token {
  private DELIMITER = "+";

  public async generate(service = Fingerprint): Promise<string> {
    const fingerprint = await this.generateFingerprint(service);
    return fingerprint +
      this.DELIMITER +
      this.generateTimestamp();
  }

  private generateFingerprint(service: any): Promise<string> {
    return new Promise((resolve, reject) => {
      new service()
        .get((result: string) => resolve(result));
    });
  }

  private generateTimestamp(): string {
    return new Date()
      .getTime()
      .toString();
  }
}