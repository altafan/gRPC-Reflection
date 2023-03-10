const { ReflectionServiceClient } = require('./api-spec/protobuf/gen/js/reflection/v1');
const { createChannel, createClient } = require('nice-grpc-web');


const channel = createChannel('http://localhost:9000')

const client = createClient(
  ReflectionServiceClient,
  channel,
);

client.getInfo().then((response) => {
  console.log(response);
})

