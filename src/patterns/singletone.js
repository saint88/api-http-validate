const Singletone = (() => {
    let instance;

    createInst = {
        method1: () => {
            return "Object created"
        }
    }

    return {
        getInstance: () => {
            if(!instance) {
                instance = createInst
            }

            return instance
        }
    }
})()

module.exports = Singletone