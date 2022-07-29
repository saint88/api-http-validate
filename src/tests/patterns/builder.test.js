const petBuilder = require('../../patterns/builder')

describe('Builder pattern', () => {
    const builder = new petBuilder()

    test('Pet builder', () => {
        const pet = builder.addName('Test pets').build()

        expect(pet.petName).toEqual('Test pets')
    })
})