const schema = {
    type: 'object',
    properties: {
        cv: {
            type: 'string'
        },
        clientAppName: {
            type: 'string'
        },
        clientAppPlatform: {
            type: 'string'
        },
        clientReleaseAudienceGroup: {
            type: 'string'
        },
        clientFlights: {
            type: 'string'
        },
        sessionKey: {
            type: 'string'
        },
        userId: {
            type: 'string'
        },
        mastermindEndpoint: {
            type: 'string'
        },
        workflow: {
            type: 'string'
        },
        joinContextId: {
            type: 'string'
        }
    }
};
const fast_json_stringify_1 = require("fast-json-stringify");

const stringify = fast_json_stringify_1(schema);

console.log(stringify({userId: 'color'}))
