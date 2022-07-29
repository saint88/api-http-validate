const {faker} = require('@faker-js/faker')
const iterator = require('../../patterns/iterator')

describe('Itzerator test suite', () => {
    const generateArray = (size) => {
        let items = []

        for(i = 0; i<size; i++) {
            items[i] = faker.animal.cat()
        }

        return items
    }

    test('Iterate array', () => {
        const items = generateArray(2)
        const Iterator = new iterator(items)

        expect(Iterator.next()).toEqual(items[0])
        expect(Iterator.next()).toEqual(items[1])

        expect(Iterator.hasNext()).toBe(false)
    })
})