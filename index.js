import request from 'request-promise';

export const Define = {
    name: 'HTTP',
    desc: 'Http plugin for viaflow by request/request',
    fields: [
        {
            name: 'method',
            display: 'Method',
            required: true,
            type: String,
        }, {
            name: 'uri',
            display: 'URI',
            required: true,
            type: String,
        }, {
            name: 'qs',
            display: 'Query String',
            type: Object,
        }, {
            name: 'headers',
            display: 'Headers',
            type: Object,
        }, {
            name: 'body',
            display: 'Body',
            type: Object,
        }, {
            name: 'extends',
            display: 'Extends',
            type: Object,
        },
    ],
};

export const Execute = async (input) => {
    let options = {
        method: input.data.method,
        uri: input.data.uri,
        qs: input.data.qs,
        headers: input.data.headers,
        body: input.data.body,
    };
    options = Object.assign(options, input.data.extends);
    const response = await request(options);
    const rst = {
        code: response.statusCode && /^2/.test(`${response.statusCode}`),
        data: response,
    };
    return rst;
};
