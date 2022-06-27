const Errors = require('../utils/errors')


class GiftExchange {
    static pairs(names) {
        let shuffledNames = names.slice()
        shuffledNames.sort(function() {return 0.5 - Math.random()})
        let return_arr = []
        if(shuffledNames.length % 2 != 0){
            throw new Errors.BadRequestError()
        }
        for (let i = 0; i < shuffledNames.length; i++) {
            return_arr.push([shuffledNames[i], shuffledNames[shuffledNames.length - 1 - i]])
        }
        return return_arr
    }

    static traditional(names) {

        const pairs = this.pairs(names);
        const descript = ' is giving a gift to '

        let return_arr = []
        let end = []

        for( let i = 0; i < pairs.length; i++) {
            if (return_arr.length > 0 && pairs[i][1] != return_arr[0][0]) {
                return_arr.push(pairs[i])
            }
            else if(return_arr.length == 0) {
                return_arr.push(pairs[i])
            }
            else if (pairs[i][1] == return_arr[0][0]) {
                end = pairs[i]
            }
        }
        return_arr.push(end)
        for ( let i = 0; i < return_arr.length; i++) {
            return_arr[i] = (return_arr[i][0] + descript + return_arr[i][1]).toString()
        }
    return return_arr
}
}

module.exports = GiftExchange;
