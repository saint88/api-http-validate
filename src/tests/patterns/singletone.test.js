const Singletone = require('../../patterns/singletone')

describe('Patterns', () => {
    test('Singletone pattern test', () => {
        const singletoneObj1 = Singletone.getInstance()
        const singletoneObj2 = Singletone.getInstance()

        expect(singletoneObj1 === singletoneObj2).toBe(true)
    })


})