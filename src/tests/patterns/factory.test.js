const Factory = require('../../patterns/factory')

describe('Factory tests', () => {
    const factory = Factory()
    test('Factory first test', () => {
        const pizzaPeperonni = factory.createPizza('peperonni')
        expect(pizzaPeperonni.type).toEqual('peperonni')

        const mocarella = factory.createPizza('mocarella')
        expect(mocarella.type).toEqual('mozarella')
    })
})