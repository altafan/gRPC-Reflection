import {createChannel, createClient} from 'nice-grpc-web';
import {ServerReflectionClient} from './api-spec/protobuf/gen/reflection';

const channel = createChannel('http://localhost:8080');

const client = createClient(
  ServerReflectionClient,
  channel,
);

client.listServices().then((response) => {
  console.log(response);
})

