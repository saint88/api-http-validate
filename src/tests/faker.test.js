const userClient = require("../clients/user_client");
const obj_utils = require("../utils/obj");
const userTestData = require('../utils/generators/user_data_generator')

// const {faker} = require('@faker-js/faker')

const Ajv = require("ajv")

const ajv = new Ajv()

describe('Add pets', () => {

    test('Add new user', async () => {
        const user = await userClient.add(userTestData)

        const schema = {
            type: "object",
            properties: {
                code: {'type': 'number'},
                type: {'type': 'object', properties: {
                    category: {'type': 'string'}
                }}
            },
            required: ['code'],
            additionalProperties: false
        }

        const validate = ajv.compile(schema)

        expect(validate(user.data)).toEqual(true)
        expect(user.status).toEqual(200)
    })
})