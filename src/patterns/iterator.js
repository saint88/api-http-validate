const Iterator = function(items) {
    this.index = 0
    this.items = items;
}

Iterator.prototype = {
    first: function() {
        this.reset()
        return this.next()
    },
    reset: function() {
        this.index = 0
    },
    next: function() {
        return this.items[this.index++]
    },
    hasNext: function() {
        return this.index < this.items.length;
    },
    prev: function() {
        return this.items[this.index--]
    }
}

module.exports = Iterator