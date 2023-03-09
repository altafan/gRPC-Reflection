"use strict";
exports.__esModule = true;
exports.ServerReflectionDefinition = exports.ErrorResponse = exports.ServiceResponse = exports.ListServiceResponse = exports.ExtensionNumberResponse = exports.FileDescriptorResponse = exports.ServerReflectionResponse = exports.ExtensionRequest = exports.ServerReflectionRequest = exports.protobufPackage = void 0;
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "grpc.reflection.v1alpha";
function createBaseServerReflectionRequest() {
    return {
        host: "",
        fileByFilename: undefined,
        fileContainingSymbol: undefined,
        fileContainingExtension: undefined,
        allExtensionNumbersOfType: undefined,
        listServices: undefined
    };
}
exports.ServerReflectionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        if (message.fileByFilename !== undefined) {
            writer.uint32(26).string(message.fileByFilename);
        }
        if (message.fileContainingSymbol !== undefined) {
            writer.uint32(34).string(message.fileContainingSymbol);
        }
        if (message.fileContainingExtension !== undefined) {
            exports.ExtensionRequest.encode(message.fileContainingExtension, writer.uint32(42).fork()).ldelim();
        }
        if (message.allExtensionNumbersOfType !== undefined) {
            writer.uint32(50).string(message.allExtensionNumbersOfType);
        }
        if (message.listServices !== undefined) {
            writer.uint32(58).string(message.listServices);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseServerReflectionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 3:
                    message.fileByFilename = reader.string();
                    break;
                case 4:
                    message.fileContainingSymbol = reader.string();
                    break;
                case 5:
                    message.fileContainingExtension = exports.ExtensionRequest.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.allExtensionNumbersOfType = reader.string();
                    break;
                case 7:
                    message.listServices = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    create: function (base) {
        return exports.ServerReflectionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseServerReflectionRequest();
        message.host = (_a = object.host) !== null && _a !== void 0 ? _a : "";
        message.fileByFilename = (_b = object.fileByFilename) !== null && _b !== void 0 ? _b : undefined;
        message.fileContainingSymbol = (_c = object.fileContainingSymbol) !== null && _c !== void 0 ? _c : undefined;
        message.fileContainingExtension =
            (object.fileContainingExtension !== undefined && object.fileContainingExtension !== null)
                ? exports.ExtensionRequest.fromPartial(object.fileContainingExtension)
                : undefined;
        message.allExtensionNumbersOfType = (_d = object.allExtensionNumbersOfType) !== null && _d !== void 0 ? _d : undefined;
        message.listServices = (_e = object.listServices) !== null && _e !== void 0 ? _e : undefined;
        return message;
    }
};
function createBaseExtensionRequest() {
    return { containingType: "", extensionNumber: 0 };
}
exports.ExtensionRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.containingType !== "") {
            writer.uint32(10).string(message.containingType);
        }
        if (message.extensionNumber !== 0) {
            writer.uint32(16).int32(message.extensionNumber);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExtensionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containingType = reader.string();
                    break;
                case 2:
                    message.extensionNumber = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    create: function (base) {
        return exports.ExtensionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExtensionRequest();
        message.containingType = (_a = object.containingType) !== null && _a !== void 0 ? _a : "";
        message.extensionNumber = (_b = object.extensionNumber) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseServerReflectionResponse() {
    return {
        validHost: "",
        originalRequest: undefined,
        fileDescriptorResponse: undefined,
        allExtensionNumbersResponse: undefined,
        listServicesResponse: undefined,
        errorResponse: undefined
    };
}
exports.ServerReflectionResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.validHost !== "") {
            writer.uint32(10).string(message.validHost);
        }
        if (message.originalRequest !== undefined) {
            exports.ServerReflectionRequest.encode(message.originalRequest, writer.uint32(18).fork()).ldelim();
        }
        if (message.fileDescriptorResponse !== undefined) {
            exports.FileDescriptorResponse.encode(message.fileDescriptorResponse, writer.uint32(34).fork()).ldelim();
        }
        if (message.allExtensionNumbersResponse !== undefined) {
            exports.ExtensionNumberResponse.encode(message.allExtensionNumbersResponse, writer.uint32(42).fork()).ldelim();
        }
        if (message.listServicesResponse !== undefined) {
            exports.ListServiceResponse.encode(message.listServicesResponse, writer.uint32(50).fork()).ldelim();
        }
        if (message.errorResponse !== undefined) {
            exports.ErrorResponse.encode(message.errorResponse, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseServerReflectionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validHost = reader.string();
                    break;
                case 2:
                    message.originalRequest = exports.ServerReflectionRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.fileDescriptorResponse = exports.FileDescriptorResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.allExtensionNumbersResponse = exports.ExtensionNumberResponse.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.listServicesResponse = exports.ListServiceResponse.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.errorResponse = exports.ErrorResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    create: function (base) {
        return exports.ServerReflectionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseServerReflectionResponse();
        message.validHost = (_a = object.validHost) !== null && _a !== void 0 ? _a : "";
        message.originalRequest = (object.originalRequest !== undefined && object.originalRequest !== null)
            ? exports.ServerReflectionRequest.fromPartial(object.originalRequest)
            : undefined;
        message.fileDescriptorResponse =
            (object.fileDescriptorResponse !== undefined && object.fileDescriptorResponse !== null)
                ? exports.FileDescriptorResponse.fromPartial(object.fileDescriptorResponse)
                : undefined;
        message.allExtensionNumbersResponse =
            (object.allExtensionNumbersResponse !== undefined && object.allExtensionNumbersResponse !== null)
                ? exports.ExtensionNumberResponse.fromPartial(object.allExtensionNumbersResponse)
                : undefined;
        message.listServicesResponse = (object.listServicesResponse !== undefined && object.listServicesResponse !== null)
            ? exports.ListServiceResponse.fromPartial(object.listServicesResponse)
            : undefined;
        message.errorResponse = (object.errorResponse !== undefined && object.errorResponse !== null)
            ? exports.ErrorResponse.fromPartial(object.errorResponse)
            : undefined;
        return message;
    }
};
function createBaseFileDescriptorResponse() {
    return { fileDescriptorProto: [] };
}
exports.FileDescriptorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.fileDescriptorProto; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFileDescriptorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fileDescriptorProto.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    create: function (base) {
        return exports.FileDescriptorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseFileDescriptorResponse();
        message.fileDescriptorProto = ((_a = object.fileDescriptorProto) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseExtensionNumberResponse() {
    return { baseTypeName: "", extensionNumber: [] };
}
exports.ExtensionNumberResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.baseTypeName !== "") {
            writer.uint32(10).string(message.baseTypeName);
        }
        writer.uint32(18).fork();
        for (var _i = 0, _a = message.extensionNumber; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExtensionNumberResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseTypeName = reader.string();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.extensionNumber.push(reader.int32());
                        }
                    }
                    else {
                        message.extensionNumber.push(reader.int32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    create: function (base) {
        return exports.ExtensionNumberResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExtensionNumberResponse();
        message.baseTypeName = (_a = object.baseTypeName) !== null && _a !== void 0 ? _a : "";
        message.extensionNumber = ((_b = object.extensionNumber) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseListServiceResponse() {
    return { service: [] };
}
exports.ListServiceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.service; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ServiceResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListServiceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.service.push(exports.ServiceResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    create: function (base) {
        return exports.ListServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListServiceResponse();
        message.service = ((_a = object.service) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ServiceResponse.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseServiceResponse() {
    return { name: "" };
}
exports.ServiceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseServiceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    create: function (base) {
        return exports.ServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseServiceResponse();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseErrorResponse() {
    return { errorCode: 0, errorMessage: "" };
}
exports.ErrorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.errorCode !== 0) {
            writer.uint32(8).int32(message.errorCode);
        }
        if (message.errorMessage !== "") {
            writer.uint32(18).string(message.errorMessage);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseErrorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.int32();
                    break;
                case 2:
                    message.errorMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    create: function (base) {
        return exports.ErrorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseErrorResponse();
        message.errorCode = (_a = object.errorCode) !== null && _a !== void 0 ? _a : 0;
        message.errorMessage = (_b = object.errorMessage) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
exports.ServerReflectionDefinition = {
    name: "ServerReflection",
    fullName: "grpc.reflection.v1alpha.ServerReflection",
    methods: {
        /**
         * The reflection service is structured as a bidirectional stream, ensuring
         * all related requests go to a single server.
         */
        serverReflectionInfo: {
            name: "ServerReflectionInfo",
            requestType: exports.ServerReflectionRequest,
            requestStream: true,
            responseType: exports.ServerReflectionResponse,
            responseStream: true,
            options: {}
        }
    }
};
