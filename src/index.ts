import {
  ReflectionServiceDefinition,
  ReflectionServiceClient,
  GetInfoRequest,
  DeepPartial,
} from "./generated/reflection/v1/service";
import { createChannel, createClient } from "nice-grpc";

const channel = createChannel("http://localhost:9000");

const client: ReflectionServiceClient = createClient(
  ReflectionServiceDefinition,
  channel
);

async function* requestStream(
  numberOfRequests: number
): AsyncIterable<DeepPartial<GetInfoRequest>> {
  for (let i = 0; i < numberOfRequests; i++) {
    yield { host: "localhost:9000" };
  }
}

async function main() {
  for await (const response of client.getInfo(requestStream(3))) {
    console.log(response);
  }
}

main().catch(console.error).finally(() => console.log("done"));
