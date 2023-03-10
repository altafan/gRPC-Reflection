import {
  ReflectionServiceDefinition,
  ReflectionServiceClient,
  GetInfoRequest,
  DeepPartial,
} from "./generated/reflection/v1/service";
import { createChannel, createClient } from "nice-grpc-web";

const channel = createChannel("http://localhost:9000");

const client: ReflectionServiceClient = createClient(
  ReflectionServiceDefinition,
  channel
);

async function* requestStream(
  numberOfRequests: number
): AsyncIterable<DeepPartial<GetInfoRequest>> {
  for (let i = 0; i < numberOfRequests; i++) {
    yield {
      host: "",
      fileByFilename: "",
      fileContainingSymbol: "",
      fileContainingExtension: {
        containingType: "",
        extensionNumber: 0
      },
      allExtensionNumbersOfType: "",
      listServices: ""
    };
  }
}

async function main() {
  for await (const response of client.getInfo(requestStream(1))) {
    console.log(response.listServicesResponse);
  }
}

main().catch(console.error).finally(() => console.log("done"));
