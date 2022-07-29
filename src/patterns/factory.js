const Factory = () => {
    return {
        createPizza: (type) => {
            let pizza;

            if(type === 'peperonni') {
                pizza = Peperonni()
            } else if(type === 'mocarella') {
                pizza = Mocarella()
            }

            return pizza
        }
}


}

const Peperonni = () => {
    return {
        type: 'peperonni',
        getType: () => {
            return ""
        }
    }
}

const Mocarella = () => {
    return {
        type: 'mozarella'
    }
}

module.exports = Factory