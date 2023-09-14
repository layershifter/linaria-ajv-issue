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
import fast from "fast-json-stringify";

const stringify = fast(schema);

export const colors = JSON.parse(stringify({userId: 'color'}))
