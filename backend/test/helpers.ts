import request from "supertest";
import { Server } from "http";

const AUTH_DATE   = new Date("1995-12-17T03:24:00").getTime();
const FINGERPRINT = "abcdefg12345";

export async function validPOST(message: string, instance: Server): Promise<request.Response> {
  return await request(instance)
  .post("/messages")
  .set("Accept", "application/json")
  .set("Authorization", `${FINGERPRINT}+${AUTH_DATE}`)
  .send({ message: message});
}

export async function invalidDataPOST(message: string, instance: Server): Promise<request.Response> {
  return await request(instance)
  .post("/messages")
  .set("Accept", "application/json")
  .set("Authorization", `${FINGERPRINT}+${AUTH_DATE}`)
  .send({ wrong: message});
}

export async function invalidAuthPOST(message: string, instance: Server): Promise<request.Response> {
  return await request(instance)
  .post("/messages")
  .set("Accept", "application/json")
  .send({ message: message});
}

export async function GET(url: string, instance: Server): Promise<request.Response> {
  return await request(instance).get(url);
}