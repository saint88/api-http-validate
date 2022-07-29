const petClient = require("../clients/pet_client");

describe('Hardcore test data', () => {

    test('Hardcore test object', async () => {
        const petObj = {
            "id": 0,
            "category": {
                "id": 1,
                "name": "category_1"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 1,
                    "name": "tag_1"
                }
            ],
            "status": "available"
        }

        const resp = await petClient.add(petObj)

        const data = resp.data

        expect(resp.status).toEqual(200)
        expect(data.name).toEqual('doggie')
        expect(data.tags.length).toEqual(1)

        // const actualPet = await petClient.findPet(data['id'])

        // expect(actualPet.data.name).toEqual('doggie')
    })
})