const PetBuilder = function () {
    this.pet = new Pet()

    this.addName = function (name) {
        this.pet.setName(name)
        return this
    }

    this.setSex = function (sex) {
        this.pet.sex = sex;
        return this
    }

    this.build = function () {
        return this.pet
    }
}

function Pet() {
    this.petName = ''

    this.setName = function (petName) {
        this.petName = petName
    }
}

module.exports = PetBuilder