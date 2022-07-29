const schema = {
    type: "object",
    properties: {
        code: {'type': 'number'},
        message: {'type': 'string'},
        type: {'type': 'string'}
    },
    required: ['code', 'message'],
    additionalProperties: false
}

module.exports = schema